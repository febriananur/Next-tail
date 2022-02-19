import SectionTitle from "./SectionTitle";
import SectionParagraph from "./SectionParagraph";
import ContactItem from "./ContactItem";
import Field from "./Field";
import Button from "./Button";

export default function ContactSection() {
  return (
    <section className="container mx-auto">
      <div className="flex rounded-lg bg-primarygray">
        <div className="w-6/12 border-r border-primarygray-200">
          <div className="py-16 px-20">
            <SectionTitle left>Contact</SectionTitle>
            <SectionParagraph left>
              Beberapa cara menghubungi saya.
            </SectionParagraph>
            <ContactItem
              label="Mail"
              value="febri@gmail.com"
              icon="/icons/mail.svg"
              className="mt-10"
            />
            <ContactItem
              label="Phone"
              value="085156501072"
              icon="/icons/phone.svg"
              className="mt-10"
            />
            <ContactItem
              label="Twitter"
              value="@febrianz"
              icon="/icons/twitter.svg"
              className="mt-10"
            />
          </div>
        </div>
        <div className="w-6/12">
          <form className="py-16 px-20">
            <div className="flex -mx-4">
              <div className="w-6/12 px-4">
                <Field label="Name" name="Name" type="text" />
              </div>
              <div className="w-6/12 px-4">
                <Field label="Email" name="email" type="text" />
              </div>
            </div>
            <Field label="Subject" name="subject" type="text" />
            <Field
              label="Message"
              name="message"
              type="textarea"
              className="h-40"
            />
            {/* progress */}
            <Button variant="black">Send</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
