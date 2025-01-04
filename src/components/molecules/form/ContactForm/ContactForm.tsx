"use client";
import { StarICon } from "@/app/images";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";
import { Textarea } from "@/components/ui/textarea";
import { planList } from "@/constant/planList";
import { serviceList } from "@/constant/serviceList";
import { zodResolver } from "@hookform/resolvers/zod";
import { E164Number } from "libphonenumber-js/core";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import Input from "../../input";
import PhonePicker from "../../phonepicker";

const ContactForm = () => {
  // Zod Schema for Validation
  const ContactFormSchema = z.object({
    projectService: z.array(z.string()).nonempty("Select at least one service"),
    projectPlan: z.array(z.string()).nonempty("Select at least one plan"),
    fullName: z.string().min(1, "Full name is required"),
    email: z.string().email("Invalid email format."),
    address: z.string().min(1, "Address is required"),
    phone: z
      .string()
      .min(5, "Invalid phone number.")
      .max(14, "Invalid phone number."),
    companyName: z.string().optional(),
    projectDetails: z.string().optional(),
  });

  // Type inference
  type ContactFormType = z.infer<typeof ContactFormSchema>;

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormType>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      projectService: [],
      projectPlan: [],
      fullName: "",
      email: "",
      address: "",
      phone: "",
      companyName: "",
      projectDetails: "",
    },
  });

  const onSubmit: SubmitHandler<ContactFormType> = (data) => {
    console.log("Form Data: ", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col text-start gap-4"
    >
      {/* Service Selection */}
      <div className="space-y-4">
        <label className="block font-semibold text-gray-800">
          Project Services
        </label>
        <Controller
          name="projectService"
          control={control}
          render={({ field: { value, onChange } }) => (
            <div className="flex flex-wrap gap-2 mt-2">
              {serviceList?.map((service, index) => (
                <Badge
                  key={index}
                  className={`rounded-full ${
                    value.includes(service)
                      ? "bg-blue-500 text-white hover:text-white hover:bg-blue-500"
                      : ""
                  }`}
                  onClick={() =>
                    onChange(
                      value.includes(service)
                        ? value.filter((b) => b !== service)
                        : [...value, service]
                    )
                  }
                >
                  {service}
                </Badge>
              ))}
            </div>
          )}
        />
        {errors.projectService && (
          <p className="text-red-500 text-sm mt-1">
            {errors.projectService.message}
          </p>
        )}
      </div>

      {/* plan Selection */}
      <div className="space-y-4">
        <label className="block font-semibold text-gray-700">
          Project Plan
        </label>
        <Controller
          name="projectPlan"
          control={control}
          render={({ field: { value, onChange } }) => (
            <div className="flex flex-wrap gap-2 mt-2">
              {planList?.map((plan, index) => (
                <Badge
                  key={index}
                  className={`w-fit flex gap-2 rounded-full ${
                    value.includes(plan) ? "bg-gray-300" : ""
                  }`}
                  onClick={() =>
                    onChange(
                      value.includes(plan)
                        ? value.filter((b) => b !== plan)
                        : [...value, plan]
                    )
                  }
                >
                  <StarICon />
                  {plan}
                </Badge>
              ))}
            </div>
          )}
        />
        {errors.projectPlan && (
          <p className="text-red-500 text-sm mt-1">
            {errors.projectPlan.message}
          </p>
        )}
      </div>
      <div className="pt-6">
        <Text className="font-semibold">Tell us more about you</Text>
      </div>

      {/* Full Name */}
      <div className="space-y-2">
        <label
          htmlFor="fullName"
          className="block text-sm font-semibold text-gray-700"
        >
          Full Name
        </label>
        <Controller
          name="fullName"
          control={control}
          render={({ field }) => (
            <Input
              className={`p-5 w-full ${errors.email ? "border-red-500" : ""}`}
              placeholder="eg. John Dai"
              type="text"
              {...field}
            />
          )}
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
        )}
      </div>

      <div className="space-y-2">
        {/* email  */}
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-gray-700"
        >
          Your email
        </label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <div className=" w-full">
              <Input
                className={`p-5 w-full  ${
                  errors.email ? "border-red-500" : ""
                }`}
                placeholder="Your email"
                type="email"
                {...field}
              />
              {errors.email && (
                <p className="hidden md:block text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          )}
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="phone"
          className="block text-sm font-semibold text-gray-700"
        >
          What is your number?
        </label>
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <div className=" w-full">
              <PhonePicker
                onChange={(value: E164Number) => field.onChange(value)}
                value={field.value as E164Number}
                placeholder="Phone Number"
              />
              {errors.phone && (
                <p className=" hidden md:block text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
          )}
        />
      </div>

      <div className="space-y-2">
        {/* Compnay Name  */}
        <label
          htmlFor="companyName"
          className="block text-sm font-semibold text-gray-700"
        >
          Company Name
        </label>
        <Controller
          name="companyName"
          control={control}
          render={({ field }) => (
            <div className=" w-full">
              <Input
                className={`p-5 w-full  ${
                  errors.companyName ? "border-red-500" : ""
                }`}
                placeholder="Your companyName"
                type="text"
                {...field}
              />
              {errors.companyName && (
                <p className="hidden md:block text-red-500 text-sm mt-1">
                  {errors.companyName.message}
                </p>
              )}
            </div>
          )}
        />
      </div>

      <div className="space-y-2">
        {/* Project Details  */}
        <label
          htmlFor="projectDetails"
          className="block text-sm font-semibold text-gray-700"
        >
          Project Details
        </label>
        <Controller
          name="projectDetails"
          control={control}
          render={({ field }) => (
            <div className=" w-full">
              <Textarea
                className={`p-2 w-full  ${
                  errors.projectDetails ? "border-red-500" : ""
                }`}
                placeholder="Your projectDetails"
                {...field}
              />
              {errors.projectDetails && (
                <p className="hidden md:block text-red-500 text-sm mt-1">
                  {errors.projectDetails.message}
                </p>
              )}
            </div>
          )}
        />
      </div>

      {/* Submit Button */}
      <div className="mt-6 w-full">
        <Button type="submit" className="w-full xl:w-fit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
