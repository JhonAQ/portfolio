"use client";

import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle,
  ArrowUpRight,
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useLocale } from "@/context/LocaleContext";

const Contact: React.FC = () => {
  const { isDarkMode } = useTheme();
  const { dictionary } = useLocale();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [messageText, setMessageText] = useState("");

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mnjgyonv", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reiniciar después de 5 segundos para que puedan leer los mensajes
        setTimeout(() => {
          setIsSubmitted(false);
          setTimeout(() => {
            setMessageText("");
            form.reset();
          }, 500); // Esperar que acabe la animación de desvanecimiento
        }, 5000);
      } else {
        // Manejar errores si es necesario
        setIsSubmitting(false);
        alert(
          "Hubo un problema al enviar el formulario. Por favor, intenta de nuevo.",
        );
      }
    } catch (error) {
      setIsSubmitting(false);
      alert("Hubo un error de conexión.");
    }
  };

  return (
    <section
      id="contact"
      className={`pt-20 pb-16 border-t relative overflow-hidden reveal transition-colors duration-500 ${
        isDarkMode ? "border-white/5" : "border-slate-200"
      }`}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] z-[-1] pointer-events-none animate-blob"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          <div>
            <h4 className="text-indigo-500 md:text-indigo-400 font-bold tracking-widest text-xs uppercase mb-3 reveal">
              {dictionary.contact.eyebrow}
            </h4>
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 transition-colors reveal delay-100 ${isDarkMode ? "text-white" : "text-slate-900"}`}
            >
              {dictionary.contact.title} <span className="text-indigo-500">{dictionary.contact.titleAccent}</span>
            </h2>
            <p
              className={`text-lg mb-10 max-w-lg leading-relaxed transition-colors reveal delay-200 ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}
            >
              {dictionary.contact.body}
            </p>

            <div className="flex flex-col gap-6 mb-10">
              <a
                href="mailto:jariasq@unsa.edu.pe"
                className={`group flex items-center justify-between p-8 rounded-3xl border transition-all duration-500 overflow-hidden relative reveal delay-300 ${
                  isDarkMode
                    ? "bg-[#111827] border-white/10 hover:border-indigo-500/50"
                    : "bg-white border-slate-200 hover:border-indigo-500/50 hover:shadow-xl"
                }`}
              >
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-indigo-500/10 to-transparent`}
                />

                <div className="relative z-10">
                  <span
                    className={`block text-xs font-bold tracking-widest uppercase mb-2 ${isDarkMode ? "text-indigo-400" : "text-indigo-600"}`}
                  >
                    {dictionary.contact.emailLabel}
                  </span>
                  <h3
                    className={`text-2xl md:text-3xl font-bold break-all ${isDarkMode ? "text-white" : "text-slate-900"}`}
                  >
                    jariasq@unsa.edu.pe
                  </h3>
                </div>

                <div
                  className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 group-hover:rotate-45 ${
                    isDarkMode
                      ? "border-white/20 bg-white/5 group-hover:bg-indigo-500 group-hover:border-indigo-500 text-white"
                      : "border-slate-200 bg-slate-50 group-hover:bg-indigo-600 group-hover:border-indigo-600 group-hover:text-white text-slate-900"
                  }`}
                >
                  <ArrowUpRight size={20} />
                </div>
              </a>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 reveal delay-400">
                <a
                  href="https://github.com/JhonAQ"
                  target="_blank"
                  rel="noreferrer"
                  className={`group p-6 rounded-3xl border transition-all duration-300 relative overflow-hidden h-48 flex flex-col justify-between ${
                    isDarkMode
                      ? "bg-[#111827] border-white/10 hover:border-white/30 hover:bg-white/5"
                      : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-xl hover:bg-slate-50"
                  }`}
                >
                  <div className="absolute right-[-20px] top-[-20px] opacity-[0.05] group-hover:opacity-[0.1] transition-all duration-500 scale-[2.5] rotate-12">
                    <Github size={100} />
                  </div>

                  <div
                    className={`relative z-10 w-12 h-12 rounded-full border flex items-center justify-center transition-colors duration-300 ${
                      isDarkMode
                        ? "border-white/20 group-hover:bg-white group-hover:text-black group-hover:border-transparent"
                        : "border-slate-200 group-hover:bg-black group-hover:text-white group-hover:border-transparent"
                    }`}
                  >
                    <Github size={24} />
                  </div>

                  <div className="relative z-10">
                    <span
                      className={`text-xs font-bold tracking-widest uppercase mb-1 block ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}
                    >
                      {dictionary.contact.githubLabel}
                    </span>
                    <div className="flex items-center justify-between">
                      <h3
                        className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-slate-900"}`}
                      >
                        GitHub
                      </h3>
                      <ArrowUpRight
                        size={20}
                        className={`opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${isDarkMode ? "text-white" : "text-slate-900"}`}
                      />
                    </div>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/jhon-aq"
                  target="_blank"
                  rel="noreferrer"
                  className={`group p-6 rounded-3xl border transition-all duration-300 relative overflow-hidden h-48 flex flex-col justify-between ${
                    isDarkMode
                      ? "bg-[#0077b5]/5 border-[#0077b5]/20 hover:bg-[#0077b5]/10 hover:border-[#0077b5]/50"
                      : "bg-[#0077b5]/5 border-[#0077b5]/20 hover:bg-[#0077b5]/10 hover:shadow-xl hover:shadow-[#0077b5]/10"
                  }`}
                >
                  <div className="absolute right-[-20px] top-[-20px] opacity-[0.1] group-hover:opacity-[0.2] transition-all duration-500 scale-[2.5] rotate-12 text-[#0077b5]">
                    <Linkedin size={100} />
                  </div>

                  <div className="relative z-10 w-12 h-12 rounded-full border border-[#0077b5]/30 flex items-center justify-center text-[#0077b5] transition-colors duration-300 group-hover:bg-[#0077b5] group-hover:text-white group-hover:border-transparent">
                    <Linkedin size={24} />
                  </div>

                  <div className="relative z-10">
                    <span className="text-xs font-bold tracking-widest uppercase mb-1 block text-[#0077b5]/60">
                      {dictionary.contact.linkedinLabel}
                    </span>
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-[#0077b5]">
                        LinkedIn
                      </h3>
                      <ArrowUpRight
                        size={20}
                        className="text-[#0077b5] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                      />
                    </div>
                  </div>
                </a>
              </div>

              <div
                className={`flex items-center justify-center gap-3 px-4 py-3 rounded-xl border w-full md:w-auto self-start reveal delay-500 ${isDarkMode ? "bg-white/5 border-white/5 text-slate-400" : "bg-slate-50 border-slate-200 text-slate-600"}`}
              >
                <MapPin size={16} />
                <span className="text-sm font-medium">
                  {dictionary.contact.location}
                </span>
              </div>
            </div>
          </div>

          {/* Formulario Estilo Mac con Animación Chat */}
          <div
            className={`backdrop-blur-xl border rounded-2xl relative overflow-hidden transition-all duration-500 reveal delay-300 ${
              isDarkMode
                ? "bg-[#0B1120]/80 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] shadow-indigo-500/10"
                : "bg-white/90 border-slate-200 shadow-[0_15px_40px_rgba(0,0,0,0.08)]"
            }`}
          >
            {/* Cabecera Mac */}
            <div
              className={`w-full h-14 flex items-center px-6 gap-2.5 border-b ${
                isDarkMode
                  ? "bg-white/5 border-white/5"
                  : "bg-slate-50/80 border-slate-200"
              }`}
            >
              <div className="flex gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] shadow-sm"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] shadow-sm"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f] shadow-sm"></div>
              </div>
              <div
                className={`absolute left-1/2 -translate-x-1/2 text-xs font-bold tracking-widest uppercase bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent`}
              >
                Let's Talk
              </div>
            </div>

            <div className="relative min-h-[520px] md:min-h-[480px]">
              {/* ESTADO 1: FORMULARIO */}
              <div
                className={`absolute inset-0 p-6 md:p-10 transition-all duration-500 flex flex-col justify-center ${isSubmitting || isSubmitted ? "opacity-0 translate-y-8 pointer-events-none" : "opacity-100 translate-y-0"}`}
              >
                <form
                  onSubmit={handleFormSubmit}
                  className="space-y-6 md:space-y-8"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className={`text-sm font-medium ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}
                      >
                        {dictionary.contact.form.name}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className={`w-full px-4 py-3 rounded-xl outline-none transition-all ${
                          isDarkMode
                            ? "bg-slate-900/50 border border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white placeholder-slate-500"
                            : "bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-slate-900 placeholder-slate-400"
                        }`}
                        placeholder="Ej. Jhonatan Arias"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className={`text-sm font-medium ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}
                      >
                        {dictionary.contact.form.email}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className={`w-full px-4 py-3 rounded-xl outline-none transition-all ${
                          isDarkMode
                            ? "bg-slate-900/50 border border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white placeholder-slate-500"
                            : "bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-slate-900 placeholder-slate-400"
                        }`}
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className={`text-sm font-medium ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}
                    >
                      {dictionary.contact.form.message}
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      required
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl outline-none transition-all resize-none ${
                        isDarkMode
                          ? "bg-slate-900/50 border border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white placeholder-slate-500"
                          : "bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-slate-900 placeholder-slate-400"
                      }`}
                      placeholder={dictionary.contact.form.placeholderMessage}
                    ></textarea>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      className={`group relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 w-full sm:w-auto shadow-lg hover:-translate-y-0.5 ${
                        isDarkMode
                          ? "bg-indigo-600 text-white hover:bg-indigo-500 hover:shadow-indigo-500/25"
                          : "bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-indigo-600/25"
                      }`}
                    >
                      <span>{dictionary.contact.form.send}</span>
                      <Send
                        size={18}
                        className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                      />
                    </button>
                  </div>
                </form>
              </div>

              {/* ESTADO 2: ENVIANDO ANIMACIÓN */}
              <div
                className={`absolute inset-0 p-8 flex flex-col items-center justify-center transition-all duration-500 ${isSubmitting && !isSubmitted ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
              >
                <Send
                  size={40}
                  className="text-indigo-500 animate-bounce mb-4"
                />
                <p
                  className={`font-medium ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}
                >
                  {dictionary.contact.form.sending}
                </p>
              </div>

              {/* ESTADO 3: ENVIADO (BURBUJAS DE CHAT) */}
              <div
                className={`absolute inset-0 p-6 sm:p-8 flex flex-col justify-center transition-all duration-500 delay-300 ${isSubmitted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"}`}
              >
                <div className="flex flex-col w-full gap-6">
                  {/* Mensaje del Usuario (Lo que acaba de escribir) */}
                  <div
                    className={`max-w-[85%] self-end rounded-2xl rounded-tr-sm p-5 shadow-lg animate-fade-in-up ${isDarkMode ? "bg-indigo-600 text-white" : "bg-indigo-500 text-white"}`}
                  >
                    <p className="text-sm leading-relaxed">
                      {messageText ||
                        dictionary.contact.form.placeholderMessage}
                    </p>
                    <div className="text-[10px] text-indigo-100/70 text-right mt-1.5 font-medium tracking-wide">
                      {dictionary.contact.form.success}
                    </div>
                  </div>

                  {/* Respuesta Automática de JhonAQ */}
                  <div
                    className={`max-w-[85%] self-start rounded-2xl rounded-tl-sm p-4 shadow-sm animate-fade-in-up animation-delay-400 ${
                      isDarkMode
                        ? "bg-[#1E293B] text-slate-300 border border-white/5"
                        : "bg-white text-slate-600 border border-slate-100"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center text-[10px] text-white font-bold">
                        JA
                      </div>
                      <p className="text-xs font-bold text-indigo-400">
                        Jhonatan Arias
                      </p>
                    </div>
                    <p className="text-sm leading-relaxed">
                      {dictionary.contact.form.thanks}
                    </p>
                    <div className="text-[10px] text-slate-500 text-right mt-2 font-medium tracking-wide">
                      Auto
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
