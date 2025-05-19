import React, {Suspense} from "react";
import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import StoreLocationSection from "./components/StoreLocationSection";
import CardSection from "./components/CardSection";

export default function page() {
  return (
    <>
      <Suspense fallback={null}>
        <StoreLocationSection />
        <CardSection />
      </Suspense>

    </>
  )
  
}
