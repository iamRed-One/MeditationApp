import { View, Text, ScrollView } from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery";
import GuidedAffirmationsGallery from "@/components/GuidedAffirmationsGallery";

const Affirmations = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#2e1f5a", "#54426b", "#a779af"]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text className="text-zinc-50 text-3xl font-bold">Affirmations</Text>
          <View>
            {AFFIRMATION_GALLERY.map((guide) => (
              <GuidedAffirmationsGallery
                key={guide.title}
                title={guide.title}
                previews={guide.data}
              />
            ))}
          </View>
        </ScrollView>
      </AppGradient>
    </View>
  );
};

export default Affirmations;
