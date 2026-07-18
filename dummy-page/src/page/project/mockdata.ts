import type { ProjectContents } from "./utils/CardContent"

export interface MockItem{
    id: string,
    title: string
    content: ProjectContents
}

export const mockData: MockItem[] = [
  {
    id: "1",
    title: "Project A",
    content: {
      lastMeetingTime: "2026-07-18 14:30",
      totalMeetings: "25",
      memberCount: "8",
      openTasks: "12",
      createdBy: "John Doe",
    },
  },
  {
    id: "2",
    title: "Project B",
    content: {
      lastMeetingTime: "2026-07-17 10:00",
      totalMeetings: "8",
      memberCount: "4",
      openTasks: "3",
      createdBy: "Jane Smith",
    },
  },
]

export default mockData