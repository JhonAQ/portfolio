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

            <div className="space-y-4 mb-10">
              <a
                href="mailto:jariasq@unsa.edu.pe"
                className={`flex items-center gap-4 p-4 rounded-xl backdrop-blur-sm border transition-all group ${isDarkMode ? "bg-[#111827]/60 border-white/5 hover:border-indigo-500/30 hover:bg-white/[0.02]" : "bg-white border-slate-200 hover:border-indigo-300 hover:bg-slate-50 shadow-sm"}`}
              >
                <div
                  className={`p-3 rounded-lg transition-all ${isDarkMode ? "bg-indigo-500/10 text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white" : "bg-indigo-100 text-indigo-600 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white"}`}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <h5
                    className={`text-sm font-semibold transition-colors ${isDarkMode ? "text-white" : "text-slate-900"}`}
                  >
                    Correo Electrónico
                  </h5>
                  <p
                    className={`text-sm transition-colors ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}
                  >
                    jariasq@unsa.edu.pe
                  </p>
                </div>
              </a>

              <div
                className={`flex items-center gap-4 p-4 rounded-xl backdrop-blur-sm border transition-all ${isDarkMode ? "bg-[#111827]/60 border-white/5" : "bg-white border-slate-200 shadow-sm"}`}
              >
                <div
                  className={`p-3 rounded-lg ${isDarkMode ? "bg-indigo-500/10 text-indigo-400" : "bg-indigo-100 text-indigo-600"}`}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <h5
                    className={`text-sm font-semibold transition-colors ${isDarkMode ? "text-white" : "text-slate-900"}`}
                  >
                    Ubicación
                  </h5>
                  <p
                    className={`text-sm transition-colors ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}
                  >
                    Arequipa, Perú (Remoto global)
                  </p>
                </div>
              </div>

              <div
                className={`flex items-center gap-4 p-4 rounded-xl backdrop-blur-sm border transition-all ${isDarkMode ? "bg-[#111827]/60 border-white/5" : "bg-white border-slate-200 shadow-sm"}`}
              >
                <div
                  className={`p-3 rounded-lg ${isDarkMode ? "bg-indigo-500/10 text-indigo-400" : "bg-indigo-100 text-indigo-600"}`}
                >
                  <Github size={20} />
                </div>
                <div className="flex-1">
                  <h5
                    className={`text-sm font-semibold mb-1 transition-colors ${isDarkMode ? "text-white" : "text-slate-900"}`}
                  >
                    Redes Sociales
                  </h5>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/JhonAQ"
                      target="_blank"
                      rel="noreferrer"
                      className={`text-sm font-medium transition-colors ${isDarkMode ? "text-slate-400 hover:text-indigo-400" : "text-slate-500 hover:text-indigo-600"}`}
                    >
                      GitHub
                    </a>
                    <a
                      href="https://linkedin.com/in/jhon-aq"
                      target="_blank"
                      rel="noreferrer"
                      className={`text-sm font-medium transition-colors ${isDarkMode ? "text-slate-400 hover:text-indigo-400" : "text-slate-500 hover:text-indigo-600"}`}
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario Estilo Mac con Animación Chat */}
          <div
            className={`backdrop-blur-xl border rounded-2xl relative overflow-hidden transition-all duration-500 ${isDarkMode ? "bg-[#0B1120]/90 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]" : "bg-white/90 border-slate-200 shadow-[0_15px_40px_rgba(0,0,0,0.08)]"}`}
          >
            {/* Cabecera Mac */}
            <div
              className={`w-full h-12 flex items-center px-5 gap-2.5 border-b ${isDarkMode ? "bg-white/5 border-white/5" : "bg-slate-50 border-slate-200"}`}
            >
              <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[0_0_5px_rgba(255,95,86,0.3)]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_5px_rgba(255,189,46,0.3)]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_5px_rgba(39,201,63,0.3)]"></div>
              <div
                className={`absolute left-1/2 -translate-x-1/2 text-[11px] font-bold tracking-widest uppercase ${isDarkMode ? "text-slate-500" : "text-slate-400"}`}
              >
                Let's Talk
              </div>
            </div>

            <div className="relative min-h-[480px]">
              {/* ESTADO 1: FORMULARIO */}
              <div
                className={`absolute inset-0 p-8 transition-all duration-500 flex flex-col justify-center ${isSubmitting || isSubmitted ? "opacity-0 translate-y-8 pointer-events-none" : "opacity-100 translate-y-0"}`}
              >
                <form onSubmit={handleFormSubmit} className="space-y-10">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="relative z-0 w-full group">
                      <input
                        type="text"
                        id="name"
                        required
                        className={`block py-3 px-0 w-full text-base bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer transition-colors ${isDarkMode ? "text-white border-white/20 focus:border-indigo-400" : "text-slate-900 border-slate-300 focus:border-indigo-600"}`}
                        placeholder=" "
                      />
                      <label
                        htmlFor="name"
                        className={`absolute text-base duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${isDarkMode ? "text-slate-400 peer-focus:text-indigo-400" : "text-slate-500 peer-focus:text-indigo-600"}`}
                      >
                        Nombre completo
                      </label>
                    </div>
                    <div className="relative z-0 w-full group">
                      <input
                        type="email"
                        id="email"
                        required
                        className={`block py-3 px-0 w-full text-base bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer transition-colors ${isDarkMode ? "text-white border-white/20 focus:border-indigo-400" : "text-slate-900 border-slate-300 focus:border-indigo-600"}`}
                        placeholder=" "
                      />
                      <label
                        htmlFor="email"
                        className={`absolute text-base duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${isDarkMode ? "text-slate-400 peer-focus:text-indigo-400" : "text-slate-500 peer-focus:text-indigo-600"}`}
                      >
                        Correo electrónico
                      </label>
                    </div>
                  </div>

                  <div className="relative z-0 w-full group">
                    <textarea
                      id="message"
                      rows="4"
                      required
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      className={`block py-3 px-0 w-full text-base bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer transition-colors resize-none ${isDarkMode ? "text-white border-white/20 focus:border-indigo-400" : "text-slate-900 border-slate-300 focus:border-indigo-600"}`}
                      placeholder=" "
                    ></textarea>
                    <label
                      htmlFor="message"
                      className={`absolute text-base duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${isDarkMode ? "text-slate-400 peer-focus:text-indigo-400" : "text-slate-500 peer-focus:text-indigo-600"}`}
                    >
                      Cuéntame sobre tu proyecto...
                    </label>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      className={`group relative overflow-hidden inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-500 w-full md:w-auto ${
                        isDarkMode
                          ? "bg-white text-slate-900 hover:bg-indigo-500 hover:text-white hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]"
                          : "bg-slate-900 text-white hover:bg-indigo-600 hover:shadow-[0_10px_20px_rgba(99,102,241,0.3)]"
                      }`}
                    >
                      <span className="relative z-10">Enviar Mensaje</span>
                      <Send
                        size={16}
                        className="relative z-10 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
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
