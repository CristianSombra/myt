import React, { useState, useRef } from "react";
import type { FormEvent, ChangeEvent } from "react";
import type { FormContactProps } from "../props/FormContactProps";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";
import "../../styles";

const FormContact: React.FC<FormContactProps> = ({ onSuccess }) => {
    const [formControl, setFormControl] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    const serviceID = 'service_6sr8nfe';
    const templateID = 'template_rwdjrox';
    const userID = 'x9KfIvrSGko0lGbIo';
    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();

        if (!validateEmail(formControl.email)) {
            toast.error("Por favor, introduce un email válido.");
            return;
        }

        if (!validatePhone(formControl.phone)) {
            toast.error("Por favor, introduce un número de celular válido.");
            return;
        }

        if (form.current) {
            emailjs
                .sendForm(serviceID, templateID, form.current, userID)
                .then((result) => {
                    console.log(result.text);
                    resetForm();
                    toast.success("¡Tu mensaje fue enviado con éxito!");
                    onSuccess();
                })
                .catch((error) => {
                    console.error("Error al enviar el mensaje", error);
                    toast.error("Hubo un problema al enviar tu mensaje. Inténtalo más tarde.");
                });
        }
    };

    const resetForm = () => {
        setFormControl({
            name: "",
            phone: "",
            email: "",
            message: "",
        });
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormControl({
            ...formControl,
            [name]: value,
        });
    };

    const validateEmail = (email: string) => {
        return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);
    };

    const validatePhone = (phone: string) => {
        return /^[0-9\s()+-]{7,15}$/.test(phone);
    };

    return (
        <form onSubmit={sendEmail} ref={form} className="form-equal-height w-100 d-flex flex-column justify-content-between">
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control border-0 border-bottom rounded-0 shadow-none"
                    placeholder="Nombre completo"
                    required
                    value={formControl.name}
                    onChange={handleChange}
                    name="name"
                    id="name"
                />
            </div>
            <div className="mb-3">
                <input
                    type="tel"
                    className="form-control border-0 border-bottom rounded-0 shadow-none"
                    placeholder="Celular"
                    required
                    value={formControl.phone}
                    onChange={handleChange}
                    name="phone"
                    id="phone"
                />
            </div>
            <div className="mb-3">
                <input
                    type="email"
                    className="form-control border-0 border-bottom rounded-0 shadow-none"
                    placeholder="Email"
                    required
                    value={formControl.email}
                    onChange={handleChange}
                    name="email"
                    id="email"
                />
            </div>
            <div className="mb-4">
                <textarea
                    className="form-control border-0 border-bottom rounded-0 shadow-none"
                    placeholder="Mensaje"
                    rows={5}
                    required
                    value={formControl.message}
                    onChange={handleChange}
                    name="message"
                    id="message"
                ></textarea>
            </div>
            <div className="text-end">
                <button
                    type="submit"
                    className="btn btn-dark border-dark hover-btn"
                    aria-label="Enviar formulario de contacto"
                >
                    Enviar
                </button>
            </div>
        </form>
    );
};

export default FormContact;
