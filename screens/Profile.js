import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AddScoreModal from "../components/Modals/AddScoreModal";
import SendInvitationModal from "../components/Modals/SendInvitationModal";

const Profile = () => {
  return (
    <SafeAreaView>
      <AddScoreModal />
    </SafeAreaView>
  );
};

export default Profile;
