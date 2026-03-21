"use client";

import React, { useState } from "react";
import { Mail, MapPin, Github, Send, CheckCircle } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const Contact: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [messageText, setMessageText] = useState("");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simula envío y luego transición al chat
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reiniciar después de 5 segundos para que puedan leer los mensajes
      setTimeout(() => {
        setIsSubmitted(false);
        setTimeout(() => {
          setMessageText("");
          const form = e.target as HTMLFormElement;
          form.reset();
        }, 500); // Esperar que acabe la animación de desvanecimiento
      }, 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className={`py-32 border-t relative overflow-hidden reveal transition-colors duration-500 ${isDarkMode ? "border-white/5" : "border-slate-200"}`}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] z-[-1] pointer-events-none animate-blob"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          <div>
            <h4 className="text-indigo-500 md:text-indigo-400 font-bold tracking-widest text-xs uppercase mb-3">
              ¿Qué sigue?
            </h4>
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 transition-colors ${isDarkMode ? "text-white" : "text-slate-900"}`}
            >
              Trabajemos <span className="text-indigo-500">Juntos.</span>
            </h2>
            <p
              className={`text-lg mb-10 max-w-lg leading-relaxed transition-colors ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}
            >
              Actualmente estoy abierto a nuevas oportunidades de trabajo y
              proyectos freelance. Ya sea que tengas una pregunta o simplemente
              quieras saludar, haré todo lo posible para responderte pronto.
            </p>

            <div className="flex flex-col gap-6 mb-10">
              <a
                href="mailto:jariasq@unsa.edu.pe"
                className={`relative overflow-hidden p-6 rounded-2xl border transition-all duration-300 group ${
                  isDarkMode
                    ? "bg-gradient-to-br from-[#111827]/80 to-[#111827]/40 border-white/5 hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]"
                    : "bg-white border-slate-200 hover:border-indigo-400 hover:shadow-lg"
                }`}
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500`}
                ></div>

                <div className="flex items-center gap-4 relative z-10">
                  <div
                    className={`p-4 rounded-xl transition-colors duration-300 ${isDarkMode ? "bg-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white" : "bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white"}`}
                  >
                    <Mail size={24} />
                  </div>
                  <div>
                    <h5
                      className={`text-sm font-bold tracking-wide uppercase mb-1 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}
                    >
                      Correo Electrónico
                    </h5>
                    <p
                      className={`text-lg md:text-xl font-bold transition-colors ${isDarkMode ? "text-white group-hover:text-indigo-300" : "text-slate-900 group-hover:text-indigo-600"}`}
                    >
                      jariasq@unsa.edu.pe
                    </p>
                  </div>
                </div>
              </a>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com/JhonAQ"
                  target="_blank"
                  rel="noreferrer"
                  className={`flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border transition-all duration-300 group ${
                    isDarkMode
                      ? "bg-[#111827]/60 border-white/5 hover:bg-[#111827] hover:border-white/20 hover:scale-[1.02]"
                      : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-md hover:scale-[1.02]"
                  }`}
                >
                  <Github
                    size={28}
                    className={isDarkMode ? "text-white" : "text-slate-900"}
                  />
                  <span
                    className={`font-semibold ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}
                  >
                    GitHub
                  </span>
                </a>

                <a
                  href="https://linkedin.com/in/jhon-aq"
                  target="_blank"
                  rel="noreferrer"
                  className={`flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border transition-all duration-300 group ${
                    isDarkMode
                      ? "bg-[#111827]/60 border-white/5 hover:bg-[#0077b5]/20 hover:border-[#0077b5]/50 hover:scale-[1.02]"
                      : "bg-white border-slate-200 hover:border-[#0077b5] hover:text-[#0077b5] hover:shadow-md hover:scale-[1.02]"
                  }`}
                >
                  <div
                    className={isDarkMode ? "text-[#00A0DC]" : "text-[#0077b5]"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </div>
                  <span
                    className={`font-semibold transition-colors ${isDarkMode ? "text-slate-300 group-hover:text-[#00A0DC]" : "text-slate-700"}`}
                  >
                    LinkedIn
                  </span>
                </a>
              </div>

              <div
                className={`flex items-center gap-3 px-4 py-3 rounded-xl border w-fit mx-auto md:mx-0 ${isDarkMode ? "bg-white/5 border-white/5 text-slate-400" : "bg-slate-100 border-slate-200 text-slate-600"}`}
              >
                <MapPin size={16} />
                <span className="text-sm font-medium">
                  Arequipa, Perú - Disponible Remoto
                </span>
              </div>
            </div>
          </div>

          {/* Formulario Estilo Mac con Animación Chat */}
          <div
            className={`backdrop-blur-xl border rounded-2xl relative overflow-hidden transition-all duration-500 ${
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
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        id="name"
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
                        Correo electrónico
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className={`w-full px-4 py-3 rounded-xl outline-none transition-all ${
                          isDarkMode
                            ? "bg-slate-900/50 border border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white placeholder-slate-500"
                            : "bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-slate-900 placeholder-slate-400"
                        }`}
                        placeholder="ejemplo@correo.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className={`text-sm font-medium ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}
                    >
                      Cuéntame sobre tu proyecto
                    </label>
                    <textarea
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
                      placeholder="Hola, estoy buscando ayuda con..."
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
                      <span>Enviar Mensaje</span>
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
                  Enviando a través del ciberespacio...
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
                        "¡Hola! Me encantaría que trabajemos juntos."}
                    </p>
                    <div className="text-[10px] text-indigo-200 text-right mt-2 font-medium tracking-wide">
                      Justo ahora
                    </div>
                  </div>

                  {/* Respuesta Automática de JhonAQ */}
                  <div
                    className={`max-w-[85%] self-start rounded-2xl rounded-tl-sm p-5 shadow-lg animate-fade-in-up animation-delay-400 ${isDarkMode ? "bg-white/10 text-slate-300 border border-white/5" : "bg-white text-slate-600 border border-slate-100"}`}
                  >
                    <p className="text-xs font-bold text-emerald-400 mb-2 flex items-center gap-1.5">
                      <CheckCircle size={14} /> JhonAQ
                    </p>
                    <p className="text-sm leading-relaxed">
                      ¡Mensaje recibido con éxito! Muchas gracias por
                      escribirme, lo leeré y me pondré en contacto contigo muy
                      pronto.
                    </p>
                    <div className="text-[10px] text-slate-500 text-right mt-2 font-medium tracking-wide">
                      Automático
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
