/* eslint-disable @next/next/no-img-element */

export default function MsgFromDirect({ message }: any) {
  return (
    <section className="py-8">
      <div className="flex items-center space-x-4 lg:space-x-8">
        <div className="w-1/2 h-full">
          <img
            src="https://img.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg?t=st=1711450648~exp=1711454248~hmac=752c3a8a1d1a0be208aa2043cbbfbf95af22fb9ea883a79d6dce9cb7806544ce&w=996"
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="w-1/2 h-full flex items-center">
          <div>
            {message ? (
              <p
                className="text-sm md:text-base text-justify"
                dangerouslySetInnerHTML={{ __html: message }}
              />
            ) : (
              <div className="">
                <div className="mb-4">
                  <h1 className="text-lg md:text-xl font-bold">
                    Dear parents and students,
                  </h1>
                </div>

                <div className="mb-4">
                  <p className="text-justify text-lg leading-relaxed">
                    On behalf of Nepal Medical College, I extend a warm welcome
                    to all parents and students who have chosen our institution
                    for their medical education journey. It&apos;s a privilege
                    to have you join our esteemed community, and we are
                    committed to providing you with the highest quality of
                    education and support throughout your time here.
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-justify text-lg leading-relaxed">
                    Our faculty and staff are dedicated to nurturing your
                    academic and personal growth, ensuring that you emerge as
                    skilled and compassionate healthcare professionals. We
                    encourage you to make the most of the opportunities
                    available at Nepal Medical College and to actively engage in
                    all aspects of learning, research, and extracurricular
                    activities.
                  </p>
                </div>

                <div className="">
                  <p className="text-lg font-semibold">Prof. Dr. RRR</p>
                  <p className="text-gray-600">Director</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
