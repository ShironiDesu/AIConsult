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
import React, { useState } from "react";
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
  telephone: z.string().regex(/^\+7\d{10}$/, {
    message: "Введите корректный номер телефона формата +7XXXXXXXXXX",
  }),
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
      telephone: "+7",
      message: "",
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const isLoading = form.formState.isSubmitting;

  const transferData = async (value) => {
    const data = {
      fields: {
        TITLE: `${value.name}, хочет получить консультацию`,
        SOURCE_DESCRIPTION: `${value.message} \ Номер телефона:${value.telephone}`,
      },
    };
    onSubmit(data);
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);
    try {
      console.log(data);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const res = await response.json();
      setIsSubmitting(false);
      setSuccess(true);
      form.reset();
      if (res.result) {
        console.log("Сделка успешно создана с ID:", res.result);
        return true;
      } else {
        throw new Error();
      }
    } catch (error) {
      setError("Произошла ошибка при отправке данных");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="footer-background" className="background-foot">
      <div className="container">
        <div className="footer">
          <p className="footer__title">Связаться с нами</p>
          <Form {...form}>
            <form
              className="footer__form"
              onSubmit={form.handleSubmit(transferData)}
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Имя"
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage className="footer_input__message" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="telephone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Телефон"
                        {...field}
                        disabled={isLoading}
                        value={
                          field.value.startsWith("+7") ? field.value : "+7"
                        }
                        onChange={(e) => {
                          const value = e.target.value;

                          if (
                            value === "+7" ||
                            (/^\+7\d{0,10}$/.test(value) && value.length <= 12)
                          ) {
                            field.onChange(e);
                          }
                        }}
                      />
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
                      <Textarea
                        placeholder="Сообщение"
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage className="footer_input__message " />
                  </FormItem>
                )}
              />
              {success && (
                <div className="footer_input__success">
                  <p>Мы с вами свяжемся!</p>
                </div>
              )}
              {error && (
                <div className="footer_input__error">
                  <p>{error}</p>
                </div>
              )}

              <ContactUsBtn
                type="submit"
                isSubmit={true}
                disabled={isLoading}
                isSubmitting={isSubmitting}
              />
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
