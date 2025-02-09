import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import {faqData} from '@/data/FaqListData';

export default function FAQPage() {
  return (
   
      <div className="max-w-4xl mx-auto mt-24 mb-8 text-gray-800">
        <h1 className="text-5xl font-bold my-16 text-center text-slate-700">Frequently Asked Questions (FAQs)</h1>
        {faqData?.map((section) => (
          <Card key={section.id} className="mb-4 p-4 shadow-md bg-gray-100 border border-slate-500">
            <CardContent>
              <h2 className="text-xl font-semibold my-4 text-slate-700">{section.category}</h2>
              <Accordion type="single" collapsible>
                {section.questions.map((faq) => (
                  <AccordionItem key={faq.id} value={`faq-${faq.id}`} className="bg-white border border-gray-300 p-2">
                    <div className="flex justify-between items-center cursor-pointer">
                      <span className="font-medium text-black">{faq.question}</span>
                      <ChevronDown className="w-5 h-5 text-gray-600" />
                    </div>
                    <p className="mt-2 text-gray-700">{faq.answer}</p>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}
      </div>
    
  );
}
