"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { serviceList } from "@/constant/serviceList";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import Input from "../../input";


const EmailPrefForm = () => {
  // Zod Schema for Validation
  const EmailPrefFormSchema = z.object({
    projectService: z.array(z.string()).nonempty("Select at least one service"),
    email: z.string().email("Invalid email format."),
  });

  // Type inference
  type EmailPrefFormType = z.infer<typeof EmailPrefFormSchema>;

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EmailPrefFormType>({
    resolver: zodResolver(EmailPrefFormSchema),
    defaultValues: {
      projectService: [],
      email: "",
    },
  });

  const onSubmit: SubmitHandler<EmailPrefFormType> = (data) => {
    alert("Form Data: " + JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      {/* Service Selection */}
      <div className="space-y-4">
        <label className="block font-semibold text-gray-800">
          Select your preference
        </label>
        <Controller
          name="projectService"
          control={control}
          render={({ field: { value, onChange } }) => (
            <div className="flex flex-wrap gap-2 mt-2">
              {serviceList?.map((service, index) => (
                <Badge
                  key={index}
                  className={`rounded-full py-2 ${
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
      {/* Submit Button */}
      <div className="mt-6">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default EmailPrefForm;
