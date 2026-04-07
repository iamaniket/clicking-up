# Days 2-5 Implementation TODO

## Day 2 — Task List View

### Tests First
- [ ] `TaskListPage.test.tsx` — Task list renders correct number of task cards from mock data
- [ ] `TaskCard.test.tsx` — Task card shows title, status badge, priority, due date, assignee
- [ ] `TaskListPage.test.tsx` — Clicking "Add Task" opens inline form
- [ ] `TaskForm.test.tsx` — Submitting form adds task to Zustand store and list
- [ ] `StatusBadge.test.tsx` — Status badge color matches status value
- [ ] `TaskListPage.test.tsx` — Filter buttons filter the rendered list
- [ ] `TaskListPage.test.tsx` — Search input filters tasks by name/ID

### Build
- [ ] Types: `src/types/task.ts`, `src/types/user.ts`
- [ ] Mock data: `src/data/mockTasks.ts` (8-10 tasks), `src/data/mockUsers.ts` (5 users)
- [ ] Store: `src/stores/taskStore.ts` (tasks[], addTask, updateTask, deleteTask, getTasksByStatus)
- [ ] Components: TaskCard, FeaturedTaskCard, EfficiencyScoreCard, TaskForm
- [ ] UI: StatusBadge, PriorityBadge, AvatarStack, SearchBar, FilterChip
- [ ] Page: TaskListPage (header, search, filters, bento grid, add button)

---

## Day 3 — Kanban Board

### Tests First
- [ ] `KanbanBoard.test.tsx` — Board renders one column per status (To Do, In Progress, Review, Done)
- [ ] `KanbanBoard.test.tsx` — Each column shows correct task count
- [ ] `KanbanColumn.test.tsx` — Tasks render inside correct column
- [ ] `KanbanBoard.test.tsx` — Dragging task updates status in store
- [ ] `KanbanColumn.test.tsx` — Empty column renders placeholder
- [ ] `KanbanBoard.test.tsx` — "+" button triggers add flow
- [ ] `KanbanBoard.test.tsx` — Board title and tags render

### Build
- [ ] Store: `src/stores/boardStore.ts` (board metadata, column order)
- [ ] Components: KanbanBoard (horizontal scroll), KanbanColumn (droppable), KanbanCard
- [ ] @dnd-kit integration: DndContext, useDroppable, useSortable
- [ ] Page: BoardPage (header + KanbanBoard, shared taskStore)

---

## Day 4 — Task Detail Modal + Board Settings

### Tests First
- [ ] `TaskModal.test.tsx` — Clicking task opens modal with correct data
- [ ] `TaskModal.test.tsx` — Modal shows assignee, due date, priority, status, tags
- [ ] `TaskModal.test.tsx` — Checklist items render correctly
- [ ] `CommentBox.test.tsx` — Comment input present and submittable
- [ ] `CommentBox.test.tsx` — Submitted comment appears in thread
- [ ] `ActivityLog.test.tsx` — Activity log shows entries
- [ ] `TaskModal.test.tsx` — Closing modal returns to previous view
- [ ] `BoardSettings.test.tsx` — Settings renders board name, workflow, members, integrations

### Build
- [ ] TaskModal (full-screen mobile / overlay desktop)
- [ ] CommentBox, ActivityLog, DiscussionThread
- [ ] Route `/tasks/:id` with background location pattern
- [ ] BoardSettingsPage (General, Workflow, Members, Integrations, Danger Zone)

---

## Day 5 — Dashboard + Auth + Polish

### Tests First
- [ ] `DashboardPage.test.tsx` — Stat cards render (Overdue, Completed, Velocity)
- [ ] `DashboardPage.test.tsx` — Chart container renders
- [ ] `DashboardPage.test.tsx` — Status counts match mock data
- [ ] `DashboardPage.test.tsx` — Activity feed renders
- [ ] `DashboardPage.test.tsx` — Priority focus section renders
- [ ] `LoginPage.test.tsx` — Email + password fields render
- [ ] `LoginPage.test.tsx` — Sign In button present and clickable
- [ ] `LoginPage.test.tsx` — Social login buttons render

### Build
- [ ] Dashboard: MetricCard, ActivityFeed, PriorityFocus, Recharts bar/pie
- [ ] Login page: Already built (Day 1), may need polish
- [ ] Polish: Skeletons, empty states, glass effects, transitions, a11y
- [ ] Final test run with coverage

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
