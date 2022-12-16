import { Heading, HStack, SlideFade, VStack } from "@chakra-ui/react";
import React from "react";
import CompaniesContainer from "./CompaniesContainer";
import FiltersContainer from "./FiltersContainer";

const Companies = () => (
  <VStack>
    <SlideFade in={true} offsetY={20}>
      <Heading size={"lg"} m={"6"}>
        Top companies hiring now
      </Heading>
    </SlideFade>
    <HStack>
      {/* <FiltersContainer /> */}
      <CompaniesContainer />
    </HStack>
  </VStack>
);

export default Companies;
