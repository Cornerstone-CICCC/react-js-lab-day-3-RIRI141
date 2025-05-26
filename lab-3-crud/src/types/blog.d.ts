export interface BlogPost {
  id: string;
  title: string;
  content: string;
  published: boolean;
}

export type BlogAction =
  | { type: "ADD"; payload: BlogPost }
  | { type: "UPDATE"; payload: BlogPost }
  | { type: "DELETE"; payload: string }
  | { type: "TOGGLE_PUBLISH"; payload: string };
