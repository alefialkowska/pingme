import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SendInvitationModal from "../components/Modals/SendInvitationModal";

const Profile = () => {
  return (
    <SafeAreaView>
      <SendInvitationModal />
    </SafeAreaView>
  );
};

export default Profile;
