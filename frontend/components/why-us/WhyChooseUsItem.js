import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Car } from "lucide-react"


const WhyChooseUsItem = ({title, description,icon}) => {
  return (
    <Card className="w-full bg-slate-200 px-2 py-8">
      <CardHeader>
        <CardTitle className="text-orange-600 font-light">{title}</CardTitle>
        <CardDescription className="font-light">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center items-center p-4 mx-auto text-9xl text-orange-600 rounded-full text-center bg-white">
            {icon }
          {/* <span className="text-base">{description}</span> */}
        </div>
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>

  )
}

export default WhyChooseUsItem