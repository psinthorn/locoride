"use server"

import { redirect } from "next/navigation"
import prisma from "@/components/utilities/db"
import { requireAuth } from "@/components/utilities/hooks"
import { onboardingSchema, requestSchema } from "@/components/utilities/ZodSchemas"
import { parseWithZod } from "@conform-to/zod"
// import { mailClient } from "@/components/utilities/mailtrap"
// import { time } from "console"
// import { array } from "zod"
// import { sub } from "date-fns"


export const OnboardUser =  async (prevState: any ,formDara: FormData) => {
  const session = requireAuth()

  const submission = parseWithZod(formDara, {
    schema: onboardingSchema
  });

  if (submission.status !== "success" ){
    return submission.reply();
  }

  const result = await prisma.user.update({
    where: {
      id: (await session).user?.id
    },
    data: {
      firstName: submission.value.firstName as string,
      lastName: submission.value.lastName as string,
      address: submission.value.address as string
    }
  });

  return redirect("/dashboard")
};

// create new booking request for client or customer
export const CreateRequest = async  (prevState: any ,formData: FormData) => {
  // const session = requireAuth()
  console.log("Create request action")
  const submission = parseWithZod(formData, {
    schema: requestSchema
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const data = await prisma.requestBooking.create({
    data: {
      requestNumber: submission.value.requestNumber, // Add this field

      firstName: submission.value.firstName,
      lastName: submission.value.lastName,
      email: submission.value.email,
      mobile: submission.value.mobile,

      date: submission.value.date,
      time: submission.value.time,
      arrival: submission.value.arrival,
      departure: submission.value.departure,
      flightNo: submission.value.flightNo,
      note: submission.value.note,

      rate: parseFloat(submission.value.rate ?? "0"),
      pax: parseFloat(submission.value.pax ?? "0"),
      total: parseFloat(submission.value.total ?? "0"),

      pickupPoint: submission.value.pickupPoint,
      dropoffPoint: submission.value.dropoffPoint,
      carType: submission.value.carType,
      carModel: submission.value.carModel,

      status: submission.value.status,
      // userId: (await session).user?.id,
    }
  });

  // const sender= {
  //   email: "hello@demomailtrap.com",
  //   name: data.fromEmail
  // }

  // mailClient.send({
  //   from: sender,
  //   to: [{ email: data.clientEmail }],
  //   // subject: `Invoice ${data.invoiceNumber} from ${data.fromName}`,
  //   // text: `Hello ${data.clientName},\n\nYou have a new invoice from ${data.fromName} for the amount of ${data.itemRate} ${data.currency}.\n\nPlease find the invoice attached.\n\nBest Regards,\n${data.fromName}`,
  //   // category: "invoice test",
  //   template_uuid: "eb703aa6-64b1-4960-9b78-a4b486f75124",
  //   template_variables: {
  //     "clientName": data.clientName,
  //     "invoicenumber": data.invoiceNumber,
  //     "dueDate": data.dueDate,
  //     "total": data.itemTotal,
  //     "invoiceLink": `http://localhost:3000/invoice/${data.id}`
  //   }
  // }).then(console.log, console.error);

  // return redirect("/")
  // console.log("Data", data)
  // return data;

}; 


// create new invoice for client or customer
export const CreateInvoice = async  (prevState: any ,formData: FormData) => {
  // const session = requireAuth()

  // console.log("Create Invoice action")

  // const submission = parseWithZod(formData, {
  //   schema: invoiceSchema
  // });

  // if (submission.status !== "success") {
  //   return submission.reply();
  // }

  // const data = await prisma.invoice.create({
  //   data: {
  //     firstName: submission.value.firstName,
  //     date: submission.value.date,
  //     invoiceNumber: submission.value.invoiceNumber, // Add this field

  //     fromName: submission.value.fromName,
  //     fromAddress: submission.value.fromAddress,
  //     fromEmail: submission.value.fromEmail,

  //     clientName: submission.value.clientName,
  //     clientAddress: submission.value.clientAddress,
  //     clientEmail: submission.value.clientEmail,

  //     // clientId: submission.value.clientId, // Add this field
  //     // vendorId: submission.value.vendorId, // Add this field
  //     // quotationId: submission.value.quotationId, // Add this field
  //     dueDate: submission.value.dueDate || "",
      

  //     // subTotal: submission.value.subTotal,
  //     // discountPercent: submission.value.discountPercent,
  //     // discountTotal:  submission.value.discountTotal,
  //     // vatPercent:     submission.value.vatPercent,
  //     // vatTotal:       submission.value.vatTotal,
  //     note: submission.value.note,

  //     itemId:          submission.value.itemId,
  //     // itemModel:       submission.value.itemModel,
  //     // itemName:        submission.value.itemName,
  //     itemDescription: submission.value.itemDescription,
  //     itemQuantity:     submission.value.itemQuantity,
  //     itemRate:        submission.value.itemRate,
  //     itemTotal:       submission.value.itemTotal,

  //     // total: submission.value.total, // Add this field
  //     currency: submission.value.currency,

  //     status: submission.value.status,

  //     userId: (await session).user?.id,
  //   }
  // });

  // const sender= {
  //   email: "hello@demomailtrap.com",
  //   name: data.fromEmail
  // }

  // mailClient.send({
  //   from: sender,
  //   to: [{ email: data.clientEmail }],
  //   // subject: `Invoice ${data.invoiceNumber} from ${data.fromName}`,
  //   // text: `Hello ${data.clientName},\n\nYou have a new invoice from ${data.fromName} for the amount of ${data.itemRate} ${data.currency}.\n\nPlease find the invoice attached.\n\nBest Regards,\n${data.fromName}`,
  //   // category: "invoice test",
  //   template_uuid: "eb703aa6-64b1-4960-9b78-a4b486f75124",
  //   template_variables: {
  //     "clientName": data.clientName,
  //     "invoicenumber": data.invoiceNumber,
  //     "dueDate": data.dueDate,
  //     "total": data.itemTotal,
  //     "invoiceLink": `http://localhost:3000/invoice/${data.id}`
  //   }
  // }).then(console.log, console.error);

  return redirect("/")

}; 

// Get invoice by id
export const GetInvoiceByID = async (userId: string, invoiceId: string) => {
//   const session = await requireAuth()

//   const invoice = await prisma.invoice.findUnique({
//     where: {
//       id: invoiceId,
//       userId: userId,
//     }
//   });

//   // If the invoice is not found, return a 404 or you can return a custom error message or redirect to a different page
//   if (invoice?.userId as string !== session.user?.id as string) {
//     return notFound();
//   }

//   // or redirect to a different page with error message
//   // if (invoice?.userId as string !== session.user?.id as string) {
//   //   return redirect("/dashboard/invoices"); // Redirect to the error page that we created
//   // }

  // return invoice;
  return redirect("/")
};


// Update invoice by id
export const UpdateInvoiceByID = async (prevState: any, formData: FormData) => {
  // const session = await requireAuth()

  // const submission = parseWithZod(formData, {
  //   schema: invoiceSchema
  // });

  // if (submission.status !== "success") {
  //   return submission.reply();
  // }

  // // Get the invoice id from the form data
  // const invoiceId = formData.get("id") as string;
 
  // const data = await prisma.invoice.update({
  //   where: {
  //     id: invoiceId,
  //     userId: session.user?.id,
  //   },
  //   data: {
  //     title: submission.value.title,
  //     date: submission.value.date,
  //     // invoiceNumber: submission.value.invoiceNumber, // Add this field

  //     fromName: submission.value.fromName,
  //     fromAddress: submission.value.fromAddress,
  //     fromEmail: submission.value.fromEmail,

  //     clientName: submission.value.clientName,
  //     clientAddress: submission.value.clientAddress,
  //     clientEmail: submission.value.clientEmail,

  //     dueDate: submission.value.dueDate || "",

  //     note: submission.value.note,

  //     itemId:          submission.value.itemId,
  //     itemDescription: submission.value.itemDescription,
  //     itemQuantity:     submission.value.itemQuantity,
  //     itemRate:        submission.value.itemRate,
  //     itemTotal:       submission.value.itemTotal,

  //     currency: submission.value.currency,

  //     status: submission.value.status,
  //   }
  // });

  return redirect("/")
};