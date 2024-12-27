"use client";
import "./Footer.scss";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { z } from "zod";
import ContactUsBtn from "../contact-btn/contact-us-btn";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Имя должно содержать минимум 2 символа" })
    .max(20, { message: "Имя должно содержать максимум 20 символов" }),
  email: z.string().email({ message: "Введите корректный email" }),
  message: z
    .string()
    .min(10, { message: "Сообщение должно содержать минимум 10 символов" })
    .max(1000, {
      message: "Сообщение должно содержать максимум 1000 символов",
    }),
});

export default function Footer({}) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  return (
    // className={isBgExists ? "background" : ""}
    <div id="footer-background" className="background-foot">
      <div className="container">
        <div className="footer">
          <p className="footer__title">Связаться с нами</p>
          <Form {...form}>
            <form
              className="footer__form"
              onSubmit={form.handleSubmit((data) => console.log(data))}
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Имя" {...field} />
                    </FormControl>
                    <FormMessage className="footer_input__message" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Электронная почта" {...field} />
                    </FormControl>
                    <FormMessage className="footer_input__message " />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea placeholder="Сообщение" {...field} />
                    </FormControl>
                    <FormMessage className="footer_input__message " />
                  </FormItem>
                )}
              />
              <ContactUsBtn />
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
