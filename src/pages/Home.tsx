import React, { useState } from "react";
import {
  Container,
  Grid,
  Button,
  Typography,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { Theme, useTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const getStyles = (pauta1: string, pauta2: readonly string[], theme: Theme) => {
  return {
    fontWeight:
      pauta2.indexOf(pauta1) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
};

const Home = () => {
  const theme = useTheme();

  const [pautas, setPautas] = useState<string[]>(["Todas"]);

  const handleChange = (event: SelectChangeEvent<typeof pautas>) => {
    const {
      target: { value },
    } = event;
    setPautas(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Container maxWidth="lg" sx={{ padding: { xs: 0, sm: 4 } }}>
      <Grid container spacing={2} alignItems="center" sx={{ paddingTop: 4 }}>
        <Grid item xs={12} sx={{ paddingBottom: 6 }}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sm={5}
              md={5}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: theme.palette.secondary.main,
                  textDecoration: "none",
                }}
              >
                CandInfo
              </Typography>
            </Grid>
            <Grid item xs={12} sm={7} md={7}>
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  textDecoration: "none",
                  color: theme.palette.primary.dark,
                  textAlign: { xs: "center", sm: "left" },
                  paddingLeft: 4,
                  paddingRight: 4,
                  fontSize: { xs: "1.25rem", sm: "1.5rem" },
                }}
              >
                ENCONTRE O CANDIDATO AO LEGISLATIVO MAIS ALINHADO COM OS SEUS
                VALORES
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ backgroundColor: theme.palette.primary.light }}
        >
          <Grid
            container
            spacing={2}
            alignItems="center"
            paddingLeft={{ xs: 2, sm: 0 }}
            paddingRight={2}
          >
            <Grid
              item
              xs={12}
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Typography variant="subtitle1" component="div">
                BUSQUE SEU CANDIDATO
              </Typography>
              <TextField
                variant="outlined"
                placeholder="Nome do candidato"
                aria-label="Nome do candidato"
                sx={{ width: { xs: "100%", sm: "50%" } }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={3}
              md={3}
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Typography variant="subtitle2" component="div">
                ESTADO
              </Typography>
              <Select
                defaultValue={1}
                sx={{ width: "100%" }}
                aria-label="Selecionar estado"
              >
                <MenuItem value={1}>Todos</MenuItem>
                <MenuItem value={2}>Acre</MenuItem>
                <MenuItem value={3}>Alagoas</MenuItem>
                <MenuItem value={4}>Amapá</MenuItem>
                <MenuItem value={5}>Amazonas</MenuItem>
                <MenuItem value={6}>Bahia</MenuItem>
                <MenuItem value={7}>Ceara</MenuItem>
                <MenuItem value={8}>...</MenuItem>
              </Select>
            </Grid>
            <Grid
              item
              xs={12}
              sm={3}
              md={3}
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Typography variant="subtitle2" component="div">
                PARTIDO
              </Typography>
              <Select
                defaultValue={1}
                sx={{ width: "100%" }}
                aria-label="Selecionar partido"
              >
                <MenuItem value={1}>Todos</MenuItem>
                <MenuItem value={2}>
                  Movimento Democrático Brasileiro (MDB)
                </MenuItem>
                <MenuItem value={3}>Partido dos Trabalhadores (PT)</MenuItem>
                <MenuItem value={4}>
                  Partido da Social Democracia Brasileira (PSDB)
                </MenuItem>
                <MenuItem value={5}>Progressistas (PP)</MenuItem>
                <MenuItem value={6}>...</MenuItem>
              </Select>
            </Grid>
            <Grid
              item
              xs={12}
              sm={3}
              md={3}
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Typography variant="subtitle2" component="div">
                GÊNERO
              </Typography>
              <Select
                defaultValue={1}
                sx={{ width: "100%" }}
                aria-label="Selecionar gênero"
              >
                <MenuItem value={1}>Todos</MenuItem>
                <MenuItem value={2}>Masculino</MenuItem>
                <MenuItem value={3}>Feminino</MenuItem>
                <MenuItem value={4}>Transgênero</MenuItem>
                <MenuItem value={5}>Gênero neutro</MenuItem>
                <MenuItem value={6}>Não-binário</MenuItem>
                <MenuItem value={7}>...</MenuItem>
              </Select>
            </Grid>
            <Grid
              item
              xs={12}
              sm={3}
              md={3}
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Typography variant="subtitle2" component="div">
                RAÇA
              </Typography>
              <Select
                defaultValue={1}
                sx={{ width: "100%" }}
                aria-label="Selecionar raça"
              >
                <MenuItem value={1}>Todas</MenuItem>
                <MenuItem value={2}>Branco</MenuItem>
                <MenuItem value={3}>Pardo</MenuItem>
                <MenuItem value={4}>Preto</MenuItem>
                <MenuItem value={5}>Amarelo</MenuItem>
                <MenuItem value={6}>...</MenuItem>
              </Select>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Typography variant="subtitle2" component="div">
                ORIENTAÇÃO SEXUAL
              </Typography>
              <Select
                defaultValue={1}
                sx={{ width: "100%" }}
                aria-label="Selecionar orientação sexual"
              >
                <MenuItem value={1}>Todas</MenuItem>
                <MenuItem value={2}>Heterossexual</MenuItem>
                <MenuItem value={3}>Homossexual</MenuItem>
                <MenuItem value={4}>Bissexual</MenuItem>
                <MenuItem value={5}>Assexual</MenuItem>
                <MenuItem value={6}>...</MenuItem>
              </Select>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Typography variant="subtitle2" component="div">
                PAUTAS
              </Typography>
              <Select
                sx={{ width: "100%" }}
                multiple
                value={pautas}
                onChange={handleChange}
                MenuProps={MenuProps}
                aria-label="Selecionar pautas"
              >
                <MenuItem
                  key={1}
                  value={"Todas"}
                  style={getStyles("Todas", pautas, theme)}
                >
                  Todas
                </MenuItem>
                <MenuItem
                  key={2}
                  value={"Meio Ambiente"}
                  style={getStyles("Meio Ambiente", pautas, theme)}
                >
                  Meio Ambiente
                </MenuItem>
                <MenuItem
                  key={3}
                  value={"Feminismo"}
                  style={getStyles("Feminismo", pautas, theme)}
                >
                  Feminismo
                </MenuItem>
                <MenuItem
                  key={4}
                  value={"LGBTQIA+"}
                  style={getStyles("LGBTQIA+", pautas, theme)}
                >
                  LGBTQIA+
                </MenuItem>
                <MenuItem
                  key={5}
                  value={"Pró-Escolha"}
                  style={getStyles("Pró-Escolha", pautas, theme)}
                >
                  Pró-Escolha
                </MenuItem>
                <MenuItem
                  key={6}
                  value={"Pró-Vida"}
                  style={getStyles("Pró-Vida", pautas, theme)}
                >
                  Pró-Vida
                </MenuItem>
                <MenuItem
                  key={7}
                  value={"..."}
                  style={getStyles("...", pautas, theme)}
                >
                  ...
                </MenuItem>
              </Select>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Typography variant="subtitle2" component="div">
                PODER LEGISLATIVO
              </Typography>
              <Select
                defaultValue={1}
                sx={{ width: "100%" }}
                aria-label="Selecionar poder legislativo"
              >
                <MenuItem value={1}>Todos</MenuItem>
                <MenuItem value={2}>Câmara dos Deputados</MenuItem>
                <MenuItem value={3}>Senado Federal</MenuItem>
              </Select>
            </Grid>
            <Grid
              item
              xs={12}
              padding={2}
              display="flex"
              justifyContent="center"
            >
              <Button variant="contained" color="secondary" href="/candidatos">
                Buscar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
