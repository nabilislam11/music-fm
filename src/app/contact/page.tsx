import { Meteors } from "@/components/ui/meteors";

const Page = () => {
  return (
    // ১. মেইন কন্টেইনার: পুরো স্ক্রিন (h-screen) এবং overflow-hidden যাতে স্ক্রলবার না আসে
    <div className="h-screen w-full bg-gray-900  relative flex flex-col items-center justify-center overflow-hidden">
      {/* ২. এই হলো উল্কা বা Meteors এফেক্ট যা পুরো ব্যাকগ্রাউন্ডে থাকবে */}
      <Meteors number={70} />

      {/* ৩. আপনার কন্টেন্ট বা ফর্ম (z-10 দেওয়া হয়েছে যাতে ব্যাকগ্রাউন্ডের উপরে থাকে) */}
      <div className="relative z-10 w-full max-w-2xl px-4 mt-10">
        <h2 className="text-3xl md:text-6xl text-center font-bold font-sans mb-4 text-white">
          Contact Us
        </h2>

        <p className="text-neutral-400 text-center mb-8 max-w-lg mx-auto">
          Any questions or remarks? Just write us a message!
        </p>

        <form className="flex flex-col gap-6 backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
          {/* Email Input */}
          <div className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="
                w-full bg-black/50 border border-neutral-800 rounded-lg px-4 py-3 
                text-white placeholder:text-neutral-500 
                focus:outline-none focus:ring-2 focus:ring-teal-500
              "
            />
          </div>

          {/* Message Input */}
          <div className="flex flex-col gap-2">
            <textarea
              rows={5}
              placeholder="Your message here..."
              className="
                w-full bg-black/50 border border-neutral-800 rounded-lg px-4 py-3 
                text-white placeholder:text-neutral-500 
                focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none
              "
            />
          </div>

          {/* Button */}
          <button className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 rounded-lg transition-all shadow-lg shadow-teal-500/20">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
