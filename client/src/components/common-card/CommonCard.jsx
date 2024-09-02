import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const CommonCard = ({
  title,
  content,
  headerRightContent,
  description,
  footerContent,
}) => {
  return (
    <Card className="flex bg-gray-100 rounded-xl p-8 transition duration-300 flex-col hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 cursor-pointer">
      <CardHeader className="p-0">
        <div className="flex justify-between">
          {title ? (
            <CardTitle
              className={`text-2xl max-w-[250px] text-ellipsis overflow-hidden whitespace-nowrap font-semibold text-gray-950`}
            >
              {title}
            </CardTitle>
          ) : null}

          {headerRightContent ? headerRightContent : null}
        </div>
        <div className="flex justify-start mb-2">
          {description ? (
            <CardDescription className="mt-3 text-gray-600">
              {description}
            </CardDescription>
          ) : null}
        </div>
      </CardHeader>
      {content ? <CardContent className="p-0">{content}</CardContent> : null}

      <CardFooter className="p-0">{footerContent}</CardFooter>
    </Card>
  );
};

export default CommonCard;
