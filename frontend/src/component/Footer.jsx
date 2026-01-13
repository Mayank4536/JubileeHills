const FooterDisclaimer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* About Section */}
          <div>
            <h4 className="text-white font-semibold mb-2">
              About This Website
            </h4>
            <p className=" text-sm sm:text-sm leading-relaxed">
              This platform is an independent online advertising and
              informational service. We do not own, manage, or control any
              individuals or services advertised on this website.
            </p>
          </div>

          {/* 18+ Disclaimer */}
          <div>
            <h4 className="text-white font-semibold mb-2  sm:text-base">
              🔞 Adults Only (18+)
            </h4>
            <p className="text-sm sm:text-sm leading-relaxed">
              This website is strictly intended for users who are
              <span className="text-white font-semibold">
                {" "}
                18 years of age or older
              </span>
              . By accessing this site, you confirm that viewing adult-oriented
              content is legal in your location.
            </p>
            <p className="mt-2 text-sm sm:text-sm leading-relaxed">
              If you are under 18 or if such content is restricted in your area,
              please exit this website immediately.
            </p>
          </div>

          {/* Legal Notice */}
          <div>
            <h4 className="text-white font-semibold mb-2 sm:text-base">
              Legal Notice
            </h4>
            <p className="text-sm sm:text-sm leading-relaxed">
              All content is provided for informational and advertising purposes
              only. Users are solely responsible for complying with applicable
              local laws and regulations.
            </p>
            <p className="mt-2 text-sm sm:text-sm leading-relaxed">
              By continuing to use this site, you acknowledge and agree to this
              disclaimer.
            </p>
          </div>

          <div className="flex justify-center mt-4">
            {/* DMCA Protected Logo */}
            <a
              href="//www.dmca.com/Protection/Status.aspx?ID=d5ee5d9e-f815-4123-9d24-215a836aa535"
              title="DMCA.com Protection Status"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://images.dmca.com/Badges/dmca-badge-w150-2x1-02.png?ID=d5ee5d9e-f815-4123-9d24-215a836aa535"
                alt="DMCA.com Protection Status"
                className=" w-24"
              />
            </a>
            <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js">
              {" "}
            </script>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-4 flex flex-col gap-2 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs sm:text-sm text-gray-400">
            © {new Date().getFullYear()} YourWebsiteName. All rights reserved.
          </p>
          <p className="text-sm sm:text-sm font-semibold text-red-400">
            18+ Only • Adult Content Warning
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterDisclaimer;
