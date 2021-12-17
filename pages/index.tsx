import type { NextPage } from "next";
import { motion } from "framer-motion";

const Home: NextPage = () => {
  return (
    <div>
      FRAMER
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2 }}
        style={{
          width: 200,
          height: 200,
          background: "tomato",
        }}
      />
    </div>
  );
};

export default Home;
