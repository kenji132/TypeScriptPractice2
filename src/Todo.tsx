import { VFC } from "react";
import { TodoType } from "./Types/Todo";

export const Todo: VFC<Omit<TodoType, "id">> = (
  // props: Pick<TodoType, "userId" | "title" | "completed">
  props
) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark}${title}(ユーザー:${userId})`}</p>;
};
