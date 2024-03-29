interface Props {
  estDesc: string;
  //   mgmtDesc: string
}

export default function AboutHospital({ description }: any) {
  return (
    <section className="py-2 lg:py-4">
      <div>
        <h1 className="text-lg md:text-2xl font-bold">Introduction</h1>
        <p className="text-justify" dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </section>
  );
}
