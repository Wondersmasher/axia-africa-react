import Text from "./Text";

type PropsType = {
  name: string;
  content: string;
  id?: number;
  course: string;
  isActive: boolean;
};
const Card = ({ content, course, ...rest }: PropsType) => {
  //   const { content, course, isActive, name, id } = props;

  return (
    <div>
      <Text title={content} />
      <Text title={course} />
      <Text title={rest.id} />
      <Text title={rest.name} />
    </div>
  );
};

export default Card;
