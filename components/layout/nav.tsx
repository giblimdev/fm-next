import Link from "next/link";
import React from "react";
import { listEmul } from "../../lib/ListEmul";
import { listqEmulation } from "../../lib/ListqEmulation";
import { listArche } from "../../lib/ListArche";
import { listMarque } from "../../lib/ListMarque";
import { listNar } from "../../lib/ListNar";
import { listKT } from "../../lib/ListKt";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Nav() {
  return (
    <div>
      <Accordion type="single" collapsible>
        {/* Emulation Section */}
        <AccordionItem value="emulation">
          <AccordionTrigger>Emulation</AccordionTrigger>
          <AccordionContent>
            {listEmul.map((item, index) => (
              <p key={index}>
                <Link className="text-base" href={item.url}>
                  {item.link}
                </Link>
              </p>
            ))}
          </AccordionContent>
        </AccordionItem>

        {/* Question Emulation Section */}
        <AccordionItem value="qemulation">
          <AccordionTrigger>Lecture Emulation</AccordionTrigger>
          <AccordionContent>
            {listqEmulation.map((item, index) => (
              <p key={index}>
                <Link className="text-base" href={item.url}>
                  {item.link}
                </Link>
              </p>
            ))}
          </AccordionContent>
        </AccordionItem>

        {/* L'Arche Royal Section */}
        <AccordionItem value="arche-royal">
          <AccordionTrigger>L'Arche Royal</AccordionTrigger>
          <AccordionContent>
            {listArche.map((item, index) => (
              <p key={index}>
                <Link className="text-base" href={item.url}>
                  {item.link}
                </Link>
              </p>
            ))}
          </AccordionContent>
        </AccordionItem>

        {/* La Marque Section */}
        <AccordionItem value="marque">
          <AccordionTrigger>La Marque</AccordionTrigger>
          <AccordionContent>
            {listMarque.map((item, index) => (
              <p key={index}>
                <Link className="text-base" href={item.url}>
                  {item.link}
                </Link>
              </p>
            ))}
          </AccordionContent>
        </AccordionItem>

        {/* Les Nautoniers Section */}
        <AccordionItem value="nautoniers">
          <AccordionTrigger>Les Nautoniers</AccordionTrigger>
          <AccordionContent>
            {listNar.map((item, index) => (
              <p key={index}>
                <Link className="text-base" href={item.url}>
                  {item.link}
                </Link>
              </p>
            ))}
          </AccordionContent>
        </AccordionItem>

        {/* Kt Section */}
        <AccordionItem value="KT">
          <AccordionTrigger>Ordre Maçonnique d temple</AccordionTrigger>
          <AccordionContent>
            {listKT.map((item, index) => (
              <p key={index}>
                <Link className="text-base" href={item.url}>
                  {item.link}
                </Link>
              </p>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Nav;
