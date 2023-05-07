"use client";

import useRentModal from "@/app/hooks/use-rent-modal";
import { useState, useMemo } from "react";
import Modal from "./Modal";
import { STEPS } from "@/app/enums/enum";
import Heading from "../Heading";
import { categories } from "../Navbar/Categories";
import { CategoriesType } from "@/app/types/types";
import CategoryInput from "../Input/CategoryInput";
import { FieldValues, useForm } from "react-hook-form";
import CountrySelect from "../Input/CountrySelect";
import dynamic from "next/dynamic";

const RentModal = () => {
  const rentModal = useRentModal();

  const [step, setSteps] = useState(STEPS.CATEGORY);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      category: "",
      location: null,
      guestCount: 1,
      roomCount: 1,
      bathroomCount: 1,
      imageSrc: "",
      price: 1,
      title: "",
      description: "",
    },
  });

  const watchedCategory = watch("category");
  const watchedLocation = watch("location");

  const Map = useMemo(
    () =>
      dynamic(() => import("../Map"), {
        ssr: false,
      }),
    [watchedLocation]
  );

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const onBack = (): void => {
    setSteps((value) => value - 1);
  };

  const onNext = (): void => {
    setSteps((value) => value + 1);
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) return "Create";

    return "Next";
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) return undefined;

    return "Back";
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Which of these best describes your place"
        subtitle="Pick a category"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto">
        {categories.map((category: CategoriesType) => (
          <div key={category.label} className="col-span-1">
            <CategoryInput
              onClick={(category) => setCustomValue("category", category)}
              selected={watchedCategory === category.label}
              label={category.label}
              icon={category.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );

  if (step === STEPS.LOCATION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Where is your place located?"
          subtitle="Help guests find you"
        />
        <CountrySelect
          value={watchedLocation}
          onChange={(value) => setCustomValue("location", value)}
        />
        <Map center={watchedLocation?.latng} />
      </div>
    );
  }

  return (
    <Modal
      title="Steelobnb your home"
      isOpen={rentModal.isOpen}
      onClose={rentModal.onOpen}
      onSubmit={onNext}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
      body={bodyContent}
    />
  );
};

export default RentModal;
