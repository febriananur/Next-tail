import SectionTitle from "./SectionTitle";
import SectionParagraph from "./SectionParagraph";
import ContactItem from "./ContactItem";

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
      </div>
      <div className="w-6/12"></div>
    </section>
  );
}
