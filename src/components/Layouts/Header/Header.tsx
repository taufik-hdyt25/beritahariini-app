import {Tooltip} from "@rneui/themed";
import {Icon, Search, Text} from "@src/components/Atoms";
import {COLORS} from "@src/constants/theme";
import React, {useState} from "react";
import {Pressable, StyleSheet, View} from "react-native";

interface IHeaderProps {
  isSearchBar?: boolean;
  onChange?: () => void;
  onClear?: () => void;
  value?: string;
  isNotif?: boolean;
  isBack?: boolean;
  back?: string;
  screenTitle?: string;
  onBack?: () => void;
  openMenu?: () => void;
}
const Header: React.FC<IHeaderProps> = ({
  isSearchBar,
  onClear,
  onChange,
  value,
  isNotif,

  screenTitle,
  back,
  onBack,
  openMenu,
}) => {
  const [openCoin, setOpenCoin] = useState(false);
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        justifyContent: "space-between",
        paddingVertical: 10,
        columnGap: 10,
      }}
    >
      {!back && (
        <View style={{flexDirection: "row", alignItems: "center", gap: 10}}>
          <Icon
            name="newspaper-variant-multiple"
            type="MaterialCommunityIcons"
            color={COLORS.white}
          />
          <Text fontWeight="semiBoldItalic" fontsize={16}>
            Berita Hari Ini
          </Text>
        </View>
      )}
      {back && !screenTitle && (
        <Pressable
          style={{flexDirection: "row", alignItems: "center", gap: 10}}
          onPress={onBack}
        >
          <Icon
            color={COLORS.white}
            name="keyboard-arrow-left"
            type="MaterialIcons"
            onPress={onBack}
          />
          <Text fontWeight="semiBold" fontsize={16}>
            {back}
          </Text>
        </Pressable>
      )}
      {screenTitle && !back && (
        <Text fontsize={16} fontWeight="semiBold">
          {screenTitle}
        </Text>
      )}
      {isSearchBar && (
        <Search onChange={onChange} onClear={onClear} value={value} />
      )}

      {/* {!back && (
        <View style={{flexDirection: "row", gap: 10}}>
          <Pressable
            onPress={() => setOpenCoin(true)}
            style={{flexDirection: "row", alignItems: "center", gap: 10}}
          >
            <Icon
              size={18}
              name="coins"
              type="FontAwesome5"
              color={COLORS.white}
            />
            <Text fontsize={14} fontWeight="semiBold">
              0
            </Text>
          </Pressable>

          {isNotif && (
            <Icon
              name="notifications-outline"
              type="Ionicons"
              color={COLORS.white}
              size={18}
            />
          )}
        </View>
      )} */}

      {!back && (
        <Icon
          onPress={openMenu}
          name="information-circle"
          type="Ionicons"
          color={COLORS.white}
          size={24}
        />
      )}
    </View>
  );
};

export default Header;
