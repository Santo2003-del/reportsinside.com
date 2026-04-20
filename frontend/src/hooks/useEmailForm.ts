import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { EMAILJS_CONFIG } from "../constants/emailConfig";

interface FormData {
  firstName?: string;
  lastName?: string;
  fullName?: string;
  email: string;
  company?: string;
  industry?: string;
  message: string;
}

export const useEmailForm = (initialData: Partial<FormData>) => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    message: "",
    ...initialData,
  });
  const [isSending, setIsSending] = useState(false);
  const honeypotRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      email: "",
      message: "",
      ...initialData,
    });
    // Clear all fields (including those not in initialData if any)
    const formInputs = document.querySelectorAll("input, textarea, select");
    formInputs.forEach((input: any) => {
      if (input.type !== "submit" && input.type !== "button") {
        input.value = "";
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam protection: Honeypot field
    if (honeypotRef.current?.value) {
      console.warn("Spam detected! Honeypot filled.");
      return;
    }

    const name = formData.fullName || `${formData.firstName || ""} ${formData.lastName || ""}`.trim();
    if (!name || !formData.email || !formData.message) {
      toast.error("Please fill required fields.");
      return;
    }

    setIsSending(true);

    const templateParams = {
      from_name: name,
      from_email: formData.email,
      company: formData.company,
      industry: formData.industry,
      message: formData.message
    };


    try {
      // Flow 1: Admin inquiry email
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.ADMIN_TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      // Flow 2: Trigger user auto-reply
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.USER_TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      toast.success("✅ Inquiry sent successfully");
      resetForm();
    } catch (error: any) {
      console.error(error);
      toast.error("❌ Failed to send inquiry. Try again");
    } finally {
      setIsSending(false);
    }
  };

  return {
    formData,
    isSending,
    honeypotRef,
    handleChange,
    handleSubmit,
  };
};
