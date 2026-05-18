"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Interior Painting",
    otherService: "",
    details: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setIsSubmitting(true);
  setMessage("");

  const dataToSubmit = {
    ...formData,
    service: formData.service === "Other" ? formData.otherService : formData.service,
  };

  delete (dataToSubmit as any).otherService;

  try {
    console.log("Submitting form:", dataToSubmit);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSubmit),
    });

    if (!response.ok) {
      throw new Error("Failed to send request");
    }

    setMessage("Your request has been submitted successfully.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "Interior Painting",
      otherService: "",
      details: "",
    });
  } catch (error) {
    console.error(error);
    setMessage("Something went wrong. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section className="relative overflow-hidden bg-[#F8F5F0] py-28">
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#8B2E35]/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#263E5A]/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex rounded-full bg-[#8B2E35]/10 px-4 py-2 text-sm font-semibold text-[#8B2E35]">
            Contact Information
          </div>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[#152536]">
            Get In Touch
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#152536]/70">
            Request your free residential painting estimate and we’ll get back
            to you as soon as possible.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8B2E35] text-white">
                <Phone size={22} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#152536]">
                  Phone Number
                </h3>

                <p className="mt-1 text-[#152536]/70">(514) 630-4638</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8B2E35] text-white">
                <Mail size={22} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#152536]">
                  Email Address
                </h3>

                <p className="mt-1 text-[#152536]/70">info@rjpainting.ca</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8B2E35] text-white">
                <MapPin size={22} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#152536]">
                  Service Area
                </h3>

                <p className="mt-1 text-[#152536]/70">
                  Montreal’s West Island
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8B2E35] text-white">
                <Clock3 size={22} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#152536]">
                  Availability
                </h3>

                <p className="mt-1 text-[#152536]/70">Monday – Saturday</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-[2rem] bg-white p-8 shadow-2xl sm:p-10"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-1">
              <div>
                <label className="mb-2 block text-sm font-bold text-[#152536]">
                  First and Last Name
                </label>

                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-[#152536]/10 bg-[#F8F5F0] px-5 py-4 outline-none transition focus:border-[#8B2E35]"
                />
              </div>

            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold text-[#152536]">
                  Email Address
                </label>

                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-[#152536]/10 bg-[#F8F5F0] px-5 py-4 outline-none transition focus:border-[#8B2E35]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-[#152536]">
                  Phone Number
                </label>

                <input
                  name="phone"
                  type="text"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-[#152536]/10 bg-[#F8F5F0] px-5 py-4 outline-none transition focus:border-[#8B2E35]"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-[#152536]">
                Service Needed
              </label>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#152536]/10 bg-[#F8F5F0] px-5 py-4 outline-none transition focus:border-[#8B2E35]"
              >
                <option>Interior Painting</option>
                <option>Exterior Painting</option>
                <option>Deck Painting & Staining</option>
                <option>Plastering & Surface Repairs</option>
                <option>Mouldings & Trim Finishing</option>
                <option>Other</option>
              </select>
            </div>

            {formData.service === "Other" && (
              <div>
                <label className="mb-2 block text-sm font-bold text-[#152536]">
                  Please tell us what you need
                </label>

                <input
                  name="otherService"
                  type="text"
                  value={formData.otherService}
                  onChange={handleChange}
                  placeholder="Example: wallpaper removal, cabinet painting, garage painting..."
                  className="w-full rounded-xl border border-[#152536]/10 bg-[#F8F5F0] px-5 py-4 outline-none transition focus:border-[#8B2E35]"
                />
              </div>
            )}

            <div>
              <label className="mb-2 block text-sm font-bold text-[#152536]">
                Project Details
              </label>

              <textarea
                name="details"
                rows={6}
                value={formData.details}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#152536]/10 bg-[#F8F5F0] px-5 py-4 outline-none transition focus:border-[#8B2E35]"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl bg-[#8B2E35] px-8 py-5 text-sm font-bold text-white transition hover:bg-[#D35B66] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Submit Request"}
            </button>

            {message && (
              <p className="text-center text-sm font-semibold text-[#152536]/70">
                {message}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}