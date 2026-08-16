import { CONTACT_ITEMS } from '../utils/constants'
import { useForm } from 'react-hook-form'
import { contactSchema, type ContactFormData } from '../utils/contactForm'
import { zodResolver } from '@hookform/resolvers/zod'

const ContactsPage = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center text-center">
      <h2 className="text-center text-6xl font-semibold">Get In Touch</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {CONTACT_ITEMS.map((c) => {
          const contact = c.contact.startsWith('http') ? (
            <a
              className="hover:text-[#5f5f5f]"
              target="_blank"
              href={c.contact}
            >
              {c.contact}
            </a>
          ) : (
            c.contact
          )
          const Icon = c.icon
          return (
            <div key={c.name} className="text-center">
              <div className="text-[#BCB7B0] italic flex justify-center gap-5 items-center mb-3 font-semibold">
                <div>
                  <Icon size={40} />
                </div>
                <div className=" text-3xl">{c.name}</div>
              </div>
              <div className="wrap-anywhere font-medium font-sans text-[#30302f]">
                {contact}
              </div>
            </div>
          )
        })}
      </div>
      <ContactForm />
    </div>
  )
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) })
  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        throw new Error('Failed to send message')
      }
      reset()
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-4 w-full max-w-3xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field>
          <input
            {...register('name')}
            placeholder="Name"
            className="contact-input"
          />

          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </Field>

        <Field>
          <input
            {...register('email')}
            placeholder="Email"
            className="contact-input"
          />

          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </Field>
      </div>

      <Field>
        <input
          {...register('subject')}
          placeholder="Subject"
          className="contact-input"
        />

        {errors.subject && (
          <ErrorMessage>{errors.subject.message}</ErrorMessage>
        )}
      </Field>

      <Field>
        <textarea
          {...register('message')}
          placeholder="Message"
          rows={6}
          className="contact-input resize-none"
        />

        {errors.message && (
          <ErrorMessage>{errors.message.message}</ErrorMessage>
        )}
      </Field>

      <button
        type="submit"
        disabled={isSubmitting}
        className="
          justify-self-center
          py-3 px-8
          rounded-4xl
          cursor-pointer
          bg-black text-white
          hover:bg-[#474747]
          transition-all
          disabled:opacity-50
        "
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
const Field = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-1">{children}</div>
}

const ErrorMessage = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-red-500 text-sm text-left">{children}</span>
}
export default ContactsPage
