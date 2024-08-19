import {SearchBar} from "@rneui/base";
import {Icon} from "@src/components/Atoms";
import {COLORS, FONTS} from "@src/constants/theme";
import React, {ReactNode} from "react";
import {StyleSheet, View} from "react-native";

interface ISearchProps {
  onChange?: () => void;
  onClear?: () => void;
  value?: string;
  radius?: number;
  height?: number;
  placeHolder?: string;
}
const Search: React.FC<ISearchProps> = ({
  onClear,
  onChange,
  value,
  radius,
  height,
  placeHolder,
}) => {
  return (
    <SearchBar
      onChangeText={onChange}
      value={value}
      onClear={onClear}
      placeholder={placeHolder}
      placeholderTextColor={COLORS.border}
      containerStyle={{
        padding: 0,
        borderWidth: 1,
        borderRadius: 100,
        borderColor: COLORS.border,
        backgroundColor: "transparent",
        flex: 1,
      }}
      inputContainerStyle={{
        borderRadius: radius ?? 100,
        height: height ?? 35,
        backgroundColor: "transparent",
      }}
      inputStyle={{
        fontFamily: FONTS.medium,
        color: "white",
        padding: 0,
        fontSize: 14,
      }}
      clearIcon={{color: COLORS.white}}
      searchIcon={
        <Icon name="search" size={24} type="Ionicons" color={COLORS.white} /> // Ganti dengan ikon yang Anda inginkan
      }
    />
  );
};

export default Search;
