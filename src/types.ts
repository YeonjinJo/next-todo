export type ElementType = {
  id: string;
  title: string;
  isDone: boolean;
};

export type ContentType = [
  {
    id: string;
    title: string;
    isDone: boolean;
  }
];

export type TodoType = {
  todoItems: [
    {
      id: string;
      title: string;
      isDone: boolean;
    }
  ];
};
