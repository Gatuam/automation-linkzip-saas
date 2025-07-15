"use clinet";

import { Button } from "@/components/ui/button";
import {
  containerVariations,
  CreatePageCard,
  itemVariants,
} from "@/lib/constant";
import { motion } from "motion/react";
import React from "react";

const CreatePage = ({ onSelectOption }) => {
  return (
    <motion.div
      variants={containerVariations}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.div variants={itemVariants} className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-primary">
          How would you like to get started?
        </h1>
        <p className="text-sm text-gray-400">
          Choose your preferred method to begin
        </p>
      </motion.div>
      <motion.div
        variants={containerVariations}
        className="grid gap-6 md:grid-cols-3"
      >
        {CreatePageCard.map((card, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{
              scale: 1.03,
              rotate: 0.5,
              transition: { duration: 0.1 },
            }}
            className={`${
              card.highlight
                ? "bg-vivid-gradient"
                : "hover:bg-vivid-gradient border"
            } rounded-xl p-[1px] transition-all duration-200 ease-in-out`}
          >
            <motion.div
              className={`w-full p-6 flex flex-col gap-y-6 items-start bg-white dark:bg-black rounded-xl
                ${
                  card.highlight
                    ? "bg-gradient-to-b from-[#1a1a1a] to-[#000] "
                    : ""
                }
              `}
              whileHover={{
                transition: { duration: 0.1 },
              }}
            >
              <div className="flex flex-col items-start w-full gap-y-3">
                <div>
                  <p className="text-primary text-sm mb-2 font-semibold">
                    {card.title}
                  </p>
                  <p
                    className={`${
                      card.highlight ? "text-vivid" : "text-primary"
                    } text-2xl font-bold`}
                  >
                    {card.highlightedText}
                  </p>
                </div>
                <p className="text-sm text-neutral-400">{card.description}</p>
              </div>
              <motion.div
                className="self-end"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variants={card.highlight ? "default" : "outline"}
                  className={`w-fit rounded-xl
                    ${card.highlight && "bg-vivid-gradient text-white"}
                    `}
                  size={"sm"}
                >
                  {card.highlight ? "Generate" : "Containue"}
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default CreatePage;
