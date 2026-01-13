import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedProfile from "../component/RelatedProfile";
import { motion } from "framer-motion";
import FAQ from "../component/FAQ";
import Areas from "../component/Areas";

const Profile = () => {
  const { profileId } = useParams();
  const { profiles } = useContext(AppContext);
  const [profileData, setProfileData] = useState(false);
  const [image, setImage] = useState("");

  const fetchProfileData = async (params) => {
    profiles.map((item) => {
      if (item._Id === profileId) {
        setProfileData(item);
        setImage(item.image);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProfileData();
  }, [profileId]);

  return profileData ? (
    <div className=" pt-1 transition-opacity ease-in-out duration-500 opacity-100 bg-gradient-to-b from-black to-black">
      {/** --------------Profile Data-------------- */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/** ---------Profile Images------ */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {profileData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                key={index}
                src={item}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt=""
              />
            ))}
          </div>

          <motion.div
            className="w-full sm:w-[80%]"
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img src={image} className=" w-full h-auto" alt="" />
          </motion.div>
        </div>

        {/** ---------Profile Details------ */}
        <div className=" flex-1 mx-2">
          <motion.h1
            className="  container mx-auto px-2 font-medium text-2xl mt- flex gap-2 text-white"
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {profileData.name}{" "}
            <img src={assets.verified_icon} className="" alt="" />
          </motion.h1>

          <motion.div
            className="container mx-auto px-2 flex items-center gap-1 mt-2"
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img src={assets.star_icon} className=" w-3 5" alt="" />
            <img src={assets.star_icon} className=" w-3 5" alt="" />
            <img src={assets.star_icon} className=" w-3 5" alt="" />
            <img src={assets.star_icon} className=" w-3 5" alt="" />
            <img src={assets.star_icon} className=" w-3 5" alt="" />
          </motion.div>

          <motion.div
            className="container mx-auto px-2 flex gap-3 mt-8 mb-8"
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a
              href="tel:+91 9155740236"
              className="flex items-center gap-2 bg-gray-100 px-6 py-3 shadow-lg hover:bg-gray-300 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Contact Us
            </a>

            <a
              href="https://wa.link/lmgjjx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 px-6 py-3 text-white shadow-lg hover:bg-green-700 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
              </svg>
              WhatsApp
            </a>
          </motion.div>

          <motion.p
            className="container mx-auto px-2 leading-relaxed text-white"
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {profileData.description}
          </motion.p>

          <hr className="  mt-8 sm:w-4/5" />

          <div className="container mx-auto px-2 text-xl text-gray-700 mt-5 flex flex-col gap-1">
            <motion.p
              className=" flex gap-1 text-white  "
              initial={{ opacity: 0.2, y: 100 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              100% Genuine Profile
            </motion.p>
            <motion.p
              className=" flex gap-1 border-t leading-relaxed text-white"
              initial={{ opacity: 0.2, y: 100 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Cash payment is available when you book your hotels and send the
              hotels details to our call girls agency.
            </motion.p>
            <motion.p
              className=" flex gap-1 border-t leading-relaxed text-white"
              initial={{ opacity: 0.2, y: 100 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/*<img src={assets.verified_icon} className="w-3" alt="" /> */}
              We provide 24/7 Client's Support until they meet the right girls.
            </motion.p>
            <motion.p
              className=" flex gap-1 border-t leading-relaxed text-white"
              initial={{ opacity: 0.2, y: 100 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              They understand what men want and how to provide it.
            </motion.p>
            <motion.p
              className=" flex gap-1 border-t leading-relaxed text-white"
              initial={{ opacity: 0.2, y: 100 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              They have mastered the art of seduction and sensual satisfaction.
            </motion.p>
            <motion.p
              className=" flex gap-1 border-t leading-relaxed text-white"
              initial={{ opacity: 0.2, y: 100 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              They yearn to entertain men and satisfy them sensually.
            </motion.p>
            <motion.p
              className=" flex gap-1 border-t leading-relaxed text-white"
              initial={{ opacity: 0.2, y: 100 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              They know how to dress and conduct themselves on various
              occasions.
            </motion.p>
          </div>
        </div>
      </div>

      {/** --------------Description Section---------- */}
      <div className=" mt-10 bg-gray-900">
        <div className=" flex">
          <motion.b
            className=" text-2xl container mx-auto px-4 text-white"
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Jubilee Hills Call Girl Services Available in 24✕7, With Cash Payment.
          </motion.b>
        </div>

        <div className="flex flex-col gap-4 px-2 py-2 leading-relaxed text-white">
          <motion.p
            className="container mx-auto px-2"
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Jubilee Hills is a beautiful yet busy area. It's famous for its diverse
            culture and heritage, including breathtaking monuments like
            Chowmahalla Palace, Charminar, and The FalakNuma Palace. But your
            stay in this place can be boring despite its beauty and attractions
            if you spend time alone.
          </motion.p>
          <motion.p
            className="container mx-auto px-2"
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our{" "}
            <a href="https://jubilee.4uescort.in/" className=" text-yellow-400">
              Independent Escorts in Jubilee Hills
            </a>{" "}
            are eager to help you enjoy your stay in style. They can help you
            explore the heritage and culture of this city. You can enjoy the
            exotic nightlife and beautiful pubs in the company of our models.
            Our seductresses are the highlight of this city because they know
            how to make men enjoy every moment they spend here. Their enthusiasm
            and energy make every man yearn to hang out with them.
          </motion.p>
          <motion.p
          className="container mx-auto px-2"
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            With our vast selection of beautiful models, you can quickly find
            the woman to book for a date, special occasion, or relaxing. We
            understand your nature as a visual creature. Therefore, we have
            taken the time to find the most gorgeous women to provide our
            Jubilee Hills escort services. These babes have different physical
            features and personality traits. Whether you want to spend time with
            one or several models, you will always find your dream girls in our
            selection.
          </motion.p>
          <motion.p
          className="container mx-auto px-2"
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            We have short, tall, slim, booty, and busty models eager to meet
            you. Our website has beautiful images of the escorts you can hire to
            entertain you. Please browse through our gallery to check their
            profiles and book the ones that appeal to you the most.
          </motion.p>
        </div>
      </div>

      {/** ---------Display Related Profiles--------- */}
      <motion.div
       className="container mx-auto px-2"
        initial={{ opacity: 0.2, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <RelatedProfile category={profileData.category} />
      </motion.div>
      <div className="mx-auto mt-5 mb-5 pl-2 shadow-sm hover:shadow-md transition-shadow duration-300">
        <motion.h2
          className="text-2xl font-bold container mx-auto px-2 text-white mb-4 "
          initial={{ opacity: 0.2, y: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          EMOTIONAL SUPPORT AND FRIENDSHIP- SAFE AND SECURE SERVICE AVAILABLE
        </motion.h2>
        <motion.p
          className="text-white container mx-auto px-2 leading-relaxed "
          initial={{ opacity: 0.2, y: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Most men like professionals escorts for emotional support. Our models
          create an engaging and warm atmosphere. Even if you're going through a
          divorce or need a beautiful woman to encourage you after a breakup,
          our temptresses will provide all the support you desire. Moreover,
          they can be your companions when traveling or relaxing in town. Their
          meaningful, intellectual conversations will make you forget all your
          worries and indulge in your enjoyment and exploration of the city.
          With these models, you'll never endure boredom or loneliness.
        </motion.p>
        <motion.h2
          className="text-2xl mt-4 container mx-auto px-2 font-bold text-white mb-4"
          initial={{ opacity: 0.2, y: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Book Our Sexiest Escorts in Jubilee Hills Now!
        </motion.h2>
        <motion.p
          className="text-white container mx-auto px-2 leading-relaxed"
          initial={{ opacity: 0.2, y: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Are you lonely, bored, or tired? Do you need a beautiful woman to help
          you relax or explore the city? Maybe you're traveling to Jubilee Hills and
          need somebody to keep you company or entertain you. We have the
          sexiest low price escorts eager to spend quality time with you. These
          babes understand your desires and are ready to exceed your
          expectations when providing sensual pleasure.
        </motion.p>
        <motion.p
          className="text-white container mx-auto px-2 mt-3 leading-relaxed"
          initial={{ opacity: 0.2, y: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Whether you are a local or a visitor, you have no reason to be lonely
          or bored in Jubilee Hills. Our sexy babes can entertain you, keep you
          company, help you relax, or tour the city. Moreover, they are flexible
          and ready to fit into your schedule. Please call us to hire the{" "}
          <a href="https://jubilee.4uescort.in/" className=" text-yellow-400">
            best escorts in Jubilee Hills
          </a>
          . We guarantee you unimaginable sensual pleasure and ultimate
          satisfaction!
        </motion.p>
      </div>

      <section className="relative py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                One Night Stand in Jubilee Hills
              </h1>
              <p className="text-lg text-green-100">
                Enjoy one night stand in Jubilee Hills with young college girls,
                mature housewives, foreign Russian escort girls, sexy MILF Tamil
                aunty in low-cost budget.
              </p>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <img
                src={assets.image1}
                alt="About Us"
                className="rounded-lg shadow-xl h-96 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py- bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Celebrity Escorts Jubilee Hills
              </h1>
              <p className="text-lg text-green-100">
                Meet B-Town cock bouncing dolls in Madras only at Babes in
                Jubilee Hills call girl service. From BJ to cum-swapping, indulge in
                various flavors of sex like never before.
              </p>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <img
                src={assets.image4}
                alt="About Us"
                className="rounded-lg shadow-xl h-96 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Escorts Near Jubilee Hills Airport
              </h1>
              <p className="text-lg text-green-100">
                Itching to utilize your time as there’s a gap between your
                flight timings? If yes, then book Babes in Jubilee Hills escorts
                service near Jubilee Hills airport for one-shot experience.
              </p>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <img
                src={assets.image5}
                alt="About Us"
                className="rounded-lg shadow-xl h-96 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py- bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Women Seeking Men Jubilee Hills
              </h1>
              <p className="text-lg text-green-100">
                There are uncountable horny women in Madras who falls in the
                category of women seeking men in Jubilee Hills for
                no-strings-attached-sex deals like a posh boner polishing dolls.
              </p>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <img
                src={assets.image6}
                alt="About Us"
                className="rounded-lg shadow-xl h-96 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto mt-5 mb-5 pl-2 shadow-sm hover:shadow-md transition-shadow duration-300">
        <motion.h2
          className="text-2xl mt-8 font-bold container mx-auto px-2 text-white mb-4 "
          initial={{ opacity: 0.2, y: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Reasons Why Our Female Escorts in Jubilee Hills Are Unmatched
        </motion.h2>
        <motion.p
          className="text-white container mx-auto px-2 leading-relaxed"
          initial={{ opacity: 0.2, y: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          The ladies that we present to you as female escorts in Jubilee Hills are
          special because of their gorgeous looks and elegance. Every escort is
          handpicked to make sure that she is not only beautiful but also smart
          and classy as well. This combination makes it possible for clients to
          have a memorable time with us.
        </motion.p>
        <motion.p
          className="text-white container mx-auto px-2 mt-3 leading-relaxed "
          initial={{ opacity: 0.2, y: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          In addition, our escorts service are very friendly and can easily
          engage in intelligent conversations and they are appropriate for any
          event. Whether it is business dinner or you might be in town and keen
          to have best time ever than anything, our escorts will do just that.
        </motion.p>
        <motion.p
          className="text-white mt-3 container mx-auto px-2 leading-relaxed "
          initial={{ opacity: 0.2, y: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Also, the{" "}
          <a href="https://jubilee.4uescort.in/" className=" text-yellow-400">
            Jubilee Hills escorts services
          </a>{" "}
          are professional and discreet with our female escorts. We value your
          privacy and satisfaction that is why each meeting with our escorts is
          not only pleasant, but also safe and discreet.
        </motion.p>

        <motion.h2
          className="text-2xl mt-7 container mx-auto px-2 font-bold text-white mb-4 "
          initial={{ opacity: 0.2, y: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          How to date an escort from Jubilee Hills?
        </motion.h2>
        <motion.p
          className="text-white container mx-auto px-2 leading-relaxed"
          initial={{ opacity: 0.2, y: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          In this case, the most essential thing that one needs to know about
          dating an escort from Jubilee Hills is communication. First of all you
          must put your WANTS and LIMITS of the relationship on the table.
          Appreciate their work and be polite to them. Go deeper than the
          physical level, and try to care about them and their lives.
        </motion.p>
        <motion.p
          className="text-white container mx-auto px-2 mt-3 leading-relaxed "
          initial={{ opacity: 0.2, y: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Third, schedule a date that would like to go for, and it has to be one
          that you both enjoy. It could be a candle light dinner at a fine
          dining restaurant or staying at home – but whatever it is, make sure
          the environment is good for the both of you. Communicate with the
          people, let the interaction happen and learn what both of you like.
        </motion.p>
        <motion.p
          className="text-white mt-3 container mx-auto px-2 leading-relaxed "
          initial={{ opacity: 0.2, y: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Lastly, make sure that you respect each other’s decision in the course
          of the date. Get attention to the things that they are thinking and
          feeling and let them express without any prohibition. If you are
          genuine and real in making the experience happen, it opens a door to a
          different level of relationship beyond the usual dating.
        </motion.p>

        <Areas />
        <FAQ />
      </div>
    </div>
  ) : (
    <div className=" opacity-0"></div>
  );
};

export default Profile;
