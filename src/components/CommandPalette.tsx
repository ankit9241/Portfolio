import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import { motion, AnimatePresence, animate } from "framer-motion";
import {
     Search,
     Home,
     FileText,
     Briefcase,
     LayoutGrid,
     GitBranch,
     Code2,
     ArrowRight,
     CornerDownLeft,
     Award,
     Mail,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { projects } from "../utils/projectsData";
import { experiences } from "../utils/experiencesData";
import { certificates } from "../utils/certificatesData";
import { playClickSound } from "../utils/audio";

// ── Searchable items ──────────────────────────────────────────────────

type SearchItem = {
     id: string;
     label: string;
     description?: string;
     category: "section" | "project" | "experience" | "certificate";
     icon: typeof Home;
     action: () => void;
};

const sectionItems: Omit<SearchItem, "action">[] = [
     {
          id: "home",
          label: "Home",
          description: "Go to top",
          category: "section",
          icon: Home,
     },
     {
          id: "about",
          label: "About Me",
          description: "About me",
          category: "section",
          icon: FileText,
     },
     {
          id: "skills",
          label: "Tech Stack",
          description: "Skills and technologies",
          category: "section",
          icon: Code2,
     },
     {
          id: "experience",
          label: "Experience",
          description: "Work experience & education",
          category: "section",
          icon: Briefcase,
     },
     {
          id: "projects",
          label: "Projects",
          description: "All projects",
          category: "section",
          icon: LayoutGrid,
     },
     {
          id: "github",
          label: "GitHub Streak",
          description: "Contribution graph",
          category: "section",
          icon: GitBranch,
     },
     {
          id: "certificates",
          label: "Certificates",
          description: "Certificates & achievements",
          category: "section",
          icon: Award,
     },
     {
          id: "contact",
          label: "Contact",
          description: "Get in touch",
          category: "section",
          icon: Mail,
     }
];

// ── Fuzzy match helper ────────────────────────────────────────────────

function fuzzyMatch(text: string, query: string): boolean {
     if (!query.trim()) return true;
     const lowerText = text.toLowerCase();
     const queryWords = query.toLowerCase().trim().split(/\s+/);
     
     // Every word in the query must be present somewhere in the text
     return queryWords.every((word) => lowerText.includes(word));
}

// ── Component ─────────────────────────────────────────────────────────

export function CommandPalette({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
     const [query, setQuery] = useState("");
     const [selectedIndex, setSelectedIndex] = useState(0);
     const inputRef = useRef<HTMLInputElement>(null);
     const listRef = useRef<HTMLDivElement>(null);
     const location = useLocation();
     const navigate = useNavigate();

     // Build all searchable items
     const allItems = useMemo<SearchItem[]>(() => {
          const scrollTo = (id: string) => {
               if (location.pathname === "/") {
                    const el = document.getElementById(id);
                    if (el) {
                         const targetY = el.getBoundingClientRect().top + window.scrollY;
                         animate(window.scrollY, targetY, {
                              type: "tween",
                              ease: [0.25, 1, 0.5, 1],
                              duration: 0.8,
                              onUpdate: (v) => window.scrollTo(0, v),
                         });
                    }
               } else {
                    navigate(`/#${id}`);
                    setTimeout(() => {
                         const el = document.getElementById(id);
                         if (el) {
                              const targetY = el.getBoundingClientRect().top + window.scrollY;
                              window.scrollTo({ top: targetY, behavior: "smooth" });
                         }
                    }, 100);
               }
          };

          const sections: SearchItem[] = sectionItems.map((s) => ({
               ...s,
               action: () => scrollTo(s.id),
          }));

          const projectItems: SearchItem[] = projects.map((p) => ({
               id: `project-${p.slug}`,
               label: p.title,
               description: p.shortDescription || p.description.slice(0, 60) + "…",
               category: "project",
               icon: Code2,
               action: () => {
                    navigate(`/projects/${p.slug}`);
               },
          }));

          const expItems: SearchItem[] = experiences.map((e) => ({
               id: `exp-${e.id}`,
               label: e.company,
               description: e.role,
               category: "experience",
               icon: Briefcase,
               action: () => {
                    scrollTo("experience");
                    setTimeout(() => {
                         const el = document.getElementById(`exp-${e.id}`);
                         if (el) {
                              const targetY = el.getBoundingClientRect().top + window.scrollY - 100;
                              animate(window.scrollY, targetY, {
                                   type: "tween",
                                   ease: [0.25, 1, 0.5, 1],
                                   duration: 0.6,
                                   onUpdate: (v) => window.scrollTo(0, v),
                              });
                         }
                    }, 400);
               },
          }));

          const certItems: SearchItem[] = certificates.map((c) => ({
               id: `cert-${c.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
               label: c.title,
               description: c.issuer + " • " + c.date,
               category: "certificate",
               icon: Award,
               action: () => {
                    scrollTo("certificates");
               },
          }));

          return [...sections, ...projectItems, ...expItems, ...certItems];
     }, [location.pathname, navigate]);

     // Filter items
     const filtered = useMemo(() => {
          if (!query.trim()) return allItems;
          return allItems.filter((item) => {
               const searchText = `${item.label} ${item.description || ""} ${item.category}`;

               // Match project tech stack
               if (item.category === "project") {
                    const slug = item.id.replace("project-", "");
                    const proj = projects.find((p) => p.slug === slug);
                    if (proj) {
                         const techStr = proj.tech.map((t) => t.name).join(" ");
                         return fuzzyMatch(`${searchText} ${techStr} ${proj.description}`, query);
                    }
               }

               // Match experience keywords
               if (item.category === "experience") {
                    const eid = parseInt(item.id.replace("exp-", ""), 10);
                    const entry = experiences.find((e) => e.id === eid);
                    if (entry) {
                         return fuzzyMatch(`${searchText} ${entry.tags.join(" ")}`, query);
                    }
               }

               // Match certificate keywords
               if (item.category === "certificate") {
                    const title = item.label;
                    const cert = certificates.find((c) => c.title === title);
                    if (cert) {
                         const skillsStr = cert.skills.join(" ");
                         return fuzzyMatch(`${searchText} ${skillsStr} ${cert.description}`, query);
                    }
               }

               return fuzzyMatch(searchText, query);
          });
     }, [query, allItems]);

     // Group filtered items by category
     const grouped = useMemo(() => {
          const groups: Record<string, { label: string; items: SearchItem[] }> = {};
          const order = ["section", "project", "experience", "certificate"];
          const labels: Record<string, string> = {
               section: "Sections",
               project: "Projects",
               experience: "Experience",
               certificate: "Certificates",
          };

          for (const item of filtered) {
               let group = groups[item.category];
               if (!group) {
                    group = { label: labels[item.category] || item.category, items: [] };
                    groups[item.category] = group;
               }
               group.items.push(item);
          }

          return order
               .map((k) => groups[k])
               .filter((g): g is { label: string; items: SearchItem[] } => g !== undefined);
     }, [filtered]);

     // Flat list for keyboard nav
     const flatItems = useMemo(() => grouped.flatMap((g) => g.items), [grouped]);

     // Precompute flat index for each item id (avoids mutable counter in render)
     const flatIndexMap = useMemo(() => {
          const map = new Map<string, number>();
          flatItems.forEach((item, i) => map.set(item.id, i));
          return map;
     }, [flatItems]);

     // Reset selection when query changes
     useEffect(() => {
          setSelectedIndex(0);
     }, [query]);

     // Focus input on open
     useEffect(() => {
          if (isOpen) {
               setQuery("");
               setSelectedIndex(0);
               setTimeout(() => inputRef.current?.focus(), 50);
          }
     }, [isOpen]);

     // Scroll selected item into view
     useEffect(() => {
          if (!listRef.current) return;
          const selected = listRef.current.querySelector("[data-selected='true']");
          if (selected) {
               selected.scrollIntoView({ block: "nearest" });
          }
     }, [selectedIndex]);

     const handleSelect = useCallback(
          (item: SearchItem) => {
               playClickSound();
               onClose();
               setTimeout(() => item.action(), 150);
          },
          [onClose]
     );

     const handleKeyDown = useCallback(
          (e: React.KeyboardEvent) => {
               if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setSelectedIndex((i) => Math.min(i + 1, flatItems.length - 1));
               } else if (e.key === "ArrowUp") {
                    e.preventDefault();
                    setSelectedIndex((i) => Math.max(i - 1, 0));
               } else if (e.key === "Enter") {
                    e.preventDefault();
                    if (flatItems[selectedIndex]) {
                         handleSelect(flatItems[selectedIndex]);
                    }
               } else if (e.key === "Escape") {
                    onClose();
               }
          },
          [flatItems, selectedIndex, handleSelect, onClose]
     );

     // Theme-aware colors (configured for dark/premium glassmorphism theme)
     const overlayBg = "rgba(0, 0, 0, 0.75)";
     const panelBg = "rgba(15, 15, 18, 0.95)";
     const panelBorder = "rgba(63, 63, 70, 0.4)";
     const categoryText = "#71717a";
     const itemText = "#e4e4e7";
     const itemDesc = "#71717a";
     const selectedBg = "rgba(63, 63, 70, 0.4)";
     const footerBg = "rgba(24, 24, 27, 0.8)";
     const kbdBg = "#27272a";
     const kbdText = "#a1a1aa";

     return (
          <AnimatePresence>
               {isOpen && (
                    <motion.div
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         exit={{ opacity: 0 }}
                         transition={{ duration: 0.12 }}
                         data-cmd-palette
                         className="fixed inset-0 z-[100] flex items-start justify-center pt-[18vh]"
                         style={{ backgroundColor: overlayBg }}
                         onClick={(e) => {
                              if (e.target === e.currentTarget) onClose();
                         }}
                    >
                         <motion.div
                              initial={{ opacity: 0, scale: 0.97, y: -6 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.97, y: -6 }}
                              transition={{ duration: 0.18, ease: [0.32, 0.72, 0, 1] }}
                              className="w-full max-w-[540px] mx-4 rounded-xl overflow-hidden"
                              style={{
                                   background: panelBg,
                                   border: `1px solid ${panelBorder}`,
                                   boxShadow: "0 25px 50px rgba(0,0,0,0.5), 0 0 0 0.5px rgba(255,255,255,0.05) inset",
                                   backdropFilter: "blur(24px) saturate(1.5)",
                              }}
                              onKeyDown={handleKeyDown}
                         >
                              {/* Search input */}
                              <div
                                   className="flex items-center gap-3 px-4 py-3.5"
                                   style={{ borderBottom: `1px solid ${panelBorder}` }}
                              >
                                   <Search className="h-[18px] w-[18px] shrink-0" style={{ color: categoryText }} />
                                   <input
                                        ref={inputRef}
                                        type="text"
                                        value={query}
                                        onChange={(e) => setQuery(e.target.value)}
                                        placeholder="Type a command or search…"
                                        className="flex-1 bg-transparent text-[0.95rem] font-medium outline-none placeholder:font-normal text-white"
                                        autoComplete="off"
                                        spellCheck={false}
                                   />
                                   <kbd
                                        className="hidden sm:inline-flex items-center rounded-md px-1.5 py-0.5 text-[0.7rem] font-medium"
                                        style={{ backgroundColor: kbdBg, color: kbdText }}
                                   >
                                        ESC
                                   </kbd>
                              </div>

                              {/* Results */}
                              <div
                                   ref={listRef}
                                   className="max-h-[360px] overflow-y-auto px-2 py-2"
                                   style={{ scrollbarWidth: "thin" }}
                              >
                                   {flatItems.length === 0 ? (
                                        <div className="flex flex-col items-center justify-center py-12 gap-2">
                                             <Search className="h-8 w-8" style={{ color: categoryText, opacity: 0.4 }} />
                                             <p className="text-sm font-medium" style={{ color: categoryText }}>
                                                  No results found
                                             </p>
                                        </div>
                                   ) : (
                                        grouped.map((group) => (
                                             <div key={group.label} className="mb-2">
                                                  <div
                                                       className="px-2 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.1em]"
                                                       style={{ color: categoryText }}
                                                  >
                                                       {group.label}
                                                  </div>
                                                  {group.items.map((item) => {
                                                       const idx = flatIndexMap.get(item.id) ?? 0;
                                                       const isSelected = idx === selectedIndex;
                                                       return (
                                                            <button
                                                                 key={item.id}
                                                                 data-selected={isSelected}
                                                                 onClick={() => handleSelect(item)}
                                                                 onMouseEnter={() => setSelectedIndex(idx)}
                                                                 className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left cursor-pointer"
                                                                 style={{
                                                                      backgroundColor: isSelected ? selectedBg : "transparent",
                                                                 }}
                                                            >
                                                                 <item.icon
                                                                      className="h-4 w-4 shrink-0"
                                                                      style={{ color: isSelected ? itemText : categoryText }}
                                                                 />
                                                                 <div className="flex-1 min-w-0">
                                                                      <span
                                                                           className="block text-[0.88rem] font-medium truncate"
                                                                           style={{ color: itemText }}
                                                                      >
                                                                           {item.label}
                                                                      </span>
                                                                      {item.description && (
                                                                           <span
                                                                                className="block text-[0.75rem] truncate mt-0.5"
                                                                                style={{ color: itemDesc }}
                                                                           >
                                                                                {item.description}
                                                                           </span>
                                                                      )}
                                                                 </div>
                                                                 {isSelected && (
                                                                      <ArrowRight
                                                                           className="h-3.5 w-3.5 shrink-0"
                                                                           style={{ color: categoryText }}
                                                                      />
                                                                 )}
                                                            </button>
                                                       );
                                                  })}
                                             </div>
                                        ))
                                   )}
                              </div>

                              {/* Footer */}
                              <div
                                   className="flex items-center justify-between px-4 py-2.5 text-[0.7rem]"
                                   style={{
                                        borderTop: `1px solid ${panelBorder}`,
                                        backgroundColor: footerBg,
                                        color: categoryText,
                                   }}
                              >
                                   <div className="flex items-center gap-3">
                                        <span className="flex items-center gap-1">
                                             <kbd
                                                  className="inline-flex items-center justify-center rounded px-1 py-0.5 text-[0.65rem] font-medium"
                                                  style={{ backgroundColor: kbdBg, color: kbdText }}
                                             >
                                                  ↑
                                             </kbd>
                                             <kbd
                                                  className="inline-flex items-center justify-center rounded px-1 py-0.5 text-[0.65rem] font-medium"
                                                  style={{ backgroundColor: kbdBg, color: kbdText }}
                                             >
                                                  ↓
                                             </kbd>
                                             <span className="ml-0.5">Navigate</span>
                                        </span>
                                        <span className="flex items-center gap-1">
                                             <kbd
                                                  className="inline-flex items-center justify-center rounded px-1 py-0.5 text-[0.65rem] font-medium"
                                                  style={{ backgroundColor: kbdBg, color: kbdText }}
                                             >
                                                  <CornerDownLeft className="h-2.5 w-2.5" />
                                             </kbd>
                                             <span className="ml-0.5">Select</span>
                                        </span>
                                   </div>
                                   <span className="flex items-center gap-1">
                                        <kbd
                                             className="inline-flex items-center justify-center rounded px-1 py-0.5 text-[0.65rem] font-medium"
                                             style={{ backgroundColor: kbdBg, color: kbdText }}
                                        >
                                             ESC
                                        </kbd>
                                        <span className="ml-0.5">Close</span>
                                   </span>
                              </div>
                         </motion.div>
                    </motion.div>
               )}
          </AnimatePresence>
     );
}

// ── Hook for global ⌘K shortcut ───────────────────────────────────────

export function useCommandPalette() {
     const [isOpen, setIsOpen] = useState(false);

     useEffect(() => {
          const handler = (e: KeyboardEvent) => {
               if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                    e.preventDefault();
                    setIsOpen((prev) => !prev);
               }
          };
          window.addEventListener("keydown", handler);
          return () => window.removeEventListener("keydown", handler);
     }, []);

     return { isOpen, setIsOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) };
}
