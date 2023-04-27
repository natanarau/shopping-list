import { AutocompleteType } from "@/types";
import * as S from "./styles";
import { Box, TextField } from "@mui/material";
import theme from "@/theme/theme";

export default function AutoComplete({ ...props }: AutocompleteType) {
  const opt = [
    { id: 1, label: "Cidade Atacadão" },
    { id: 2, label: "Atacadão" },
    { id: 3, label: "Favorito" },
    { id: 4, label: "Rede mais" },
  ];
  return (
    <Box>
      <S.Label className={props.className}>{props.label}</S.Label>
      <S.Autocomplete
        id="combo-box-demo"
        placeholder="teste"
        options={opt}
        getOptionLabel={(option: any) => option.label}
        style={{ width: 300 }}
        renderOption={(props, option: any) => {
          const { label } = option;
          return (
            <span
              {...props}
              style={{ color: `${theme.palette.text.secondary}` }}
            >
              {label}
            </span>
          );
        }}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              label="Escolha o mercado"
              variant="outlined"
              fullWidth
            />
          );
        }}
      />
    </Box>
  );
}
