# Days 2-5 Implementation TODO

## Day 2 — Task List View ✅

### Tests First
- [x] `TaskListPage.test.tsx` — Task list renders correct number of task cards from mock data
- [x] `TaskCard.test.tsx` — Task card shows title, status badge, priority, due date, assignee
- [x] `TaskListPage.test.tsx` — Clicking "Add Task" opens inline form
- [x] `TaskForm.test.tsx` — Submitting form adds task to Zustand store and list
- [x] `StatusBadge.test.tsx` — Status badge color matches status value
- [x] `TaskListPage.test.tsx` — Filter buttons filter the rendered list
- [x] `TaskListPage.test.tsx` — Search input filters tasks by name/ID

### Build
- [x] Types: `src/types/task.ts`, `src/types/user.ts`
- [x] Mock data: `src/data/mockTasks.ts` (8-10 tasks), `src/data/mockUsers.ts` (5 users)
- [x] Store: `src/stores/taskStore.ts` (tasks[], addTask, updateTask, deleteTask, getTasksByStatus)
- [x] Components: TaskCard, FeaturedTaskCard, EfficiencyScoreCard, TaskForm
- [x] UI: StatusBadge, PriorityBadge, AvatarStack, SearchBar, FilterChip
- [x] Page: TaskListPage (header, search, filters, bento grid, add button)

---

## Day 3 — Kanban Board ✅

### Tests First
- [x] `KanbanBoard.test.tsx` — Board renders one column per status (To Do, In Progress, Review, Done)
- [x] `KanbanBoard.test.tsx` — Each column shows correct task count
- [x] `KanbanColumn.test.tsx` — Tasks render inside correct column
- [x] `KanbanBoard.test.tsx` — Dragging task updates status in store
- [x] `KanbanColumn.test.tsx` — Empty column renders placeholder
- [x] `KanbanBoard.test.tsx` — "+" button triggers add flow
- [x] `KanbanBoard.test.tsx` — Board title and tags render

### Build
- [x] Components: KanbanBoard (horizontal scroll), KanbanColumn (droppable), KanbanCard
- [x] @dnd-kit integration: DndContext, useDroppable, useSortable
- [x] Page: BoardPage (header + KanbanBoard, shared taskStore)

---

## Day 4 — Task Detail Modal + Board Settings ✅

### Tests First
- [x] `TaskModal.test.tsx` — Clicking task opens modal with correct data
- [x] `TaskModal.test.tsx` — Modal shows assignee, due date, priority, status, tags
- [x] `TaskModal.test.tsx` — Checklist items render correctly
- [x] `CommentBox.test.tsx` — Comment input present and submittable
- [x] `CommentBox.test.tsx` — Submitted comment appears in thread
- [x] `ActivityLog.test.tsx` — Activity log shows entries
- [x] `TaskModal.test.tsx` — Closing modal returns to previous view
- [x] `BoardSettings.test.tsx` — Settings renders board name, workflow, members, integrations

### Build
- [x] TaskModal (full-screen mobile / overlay desktop)
- [x] CommentBox, ActivityLog
- [x] Route `/tasks/:id` with TaskModal
- [x] BoardSettingsPage (General, Workflow, Members, Integrations, Danger Zone)

---

## Day 5 — Dashboard + Auth + Polish ✅

### Tests First
- [x] `DashboardPage.test.tsx` — Stat cards render (Overdue, Completed, Velocity)
- [x] `DashboardPage.test.tsx` — Chart container renders
- [x] `DashboardPage.test.tsx` — Status counts match mock data
- [x] `DashboardPage.test.tsx` — Activity feed renders
- [x] `DashboardPage.test.tsx` — Priority focus section renders
- [x] `LoginPage.test.tsx` — Email + password fields render
- [x] `LoginPage.test.tsx` — Sign In button present and clickable
- [x] `LoginPage.test.tsx` — Social login buttons render

### Build
- [x] Dashboard: MetricCard, ActivityFeed, PriorityFocus, Recharts bar/pie
- [x] Login page: Already built (Day 1), LoginPage tests added
- [x] Final test run with coverage

---

## Future (Post-MVP)
- [ ] Python backend in `apps/api/`
- [ ] Database setup
- [ ] Real authentication (OAuth with Google/GitHub)
- [ ] API integration (replace mock stores)
- [ ] Signup/registration page
- [ ] Notification system
- [ ] File upload
- [ ] Real-time collaboration
