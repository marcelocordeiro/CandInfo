import React, { useState } from "react";
import {
  Container,
  Breadcrumbs,
  Link,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";

import Candidate from "../components/Candidate";
import candidatesList from "../data/candidatos.json";

const Candidates = () => {
  document.title = "CandInfo - Candidatos";
  const theme = useTheme();
  const [name, setName] = useState("");
  return (
    <Container maxWidth="lg" sx={{ padding: { xs: 0, sm: 4 } }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color={theme.palette.primary.dark} href="/">
              Página Inicial
            </Link>
            <Typography color={theme.palette.primary.dark}>
              Candidatos
            </Typography>
          </Breadcrumbs>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ backgroundColor: theme.palette.primary.light }}
          marginTop={2}
        >
          <Grid
            container
            spacing={1}
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
              <Typography variant="subtitle2">BUSQUE SEU CANDIDATO</Typography>
              <TextField
                variant="outlined"
                placeholder="Nome do candidato"
                aria-label="Nome do candidato"
                sx={{ width: { xs: "100%", sm: "50%" } }}
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={1.7}
              md={1.7}
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              paddingBottom={2}
              marginTop={{ xs: 0, sm: 4 }}
            >
              <Typography variant="subtitle2">ESTADO</Typography>
              <Select
                defaultValue={1}
                sx={{ width: "100%" }}
                size="small"
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
              sm={1.7}
              md={1.7}
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              paddingBottom={2}
              marginTop={{ xs: 0, sm: 4 }}
            >
              <Typography variant="subtitle2">PARTIDO</Typography>
              <Select
                defaultValue={1}
                sx={{ width: "100%" }}
                size="small"
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
              sm={1.7}
              md={1.7}
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              paddingBottom={2}
              marginTop={{ xs: 0, sm: 4 }}
            >
              <Typography variant="subtitle2">GÊNERO</Typography>
              <Select
                defaultValue={1}
                sx={{ width: "100%" }}
                size="small"
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
              sm={1.7}
              md={1.7}
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              paddingBottom={2}
              marginTop={{ xs: 0, sm: 4 }}
            >
              <Typography variant="subtitle2">RAÇA</Typography>
              <Select
                defaultValue={1}
                sx={{ width: "100%" }}
                size="small"
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
              sm={1.8}
              md={1.8}
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              paddingBottom={2}
            >
              <Typography variant="subtitle2" sx={{ textAlign: "center" }}>
                ORIENTAÇÃO SEXUAL
              </Typography>
              <Select
                defaultValue={1}
                sx={{ width: "100%" }}
                size="small"
                aria-label="Selecionar orientação Sexual"
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
              sm={1.7}
              md={1.7}
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              paddingBottom={2}
              marginTop={{ xs: 0, sm: 4 }}
            >
              <Typography variant="subtitle2">PAUTAS</Typography>
              <Select
                defaultValue={1}
                sx={{ width: "100%" }}
                size="small"
                aria-label="Selecionar pautas"
              >
                <MenuItem value={1}>Todas</MenuItem>
                <MenuItem value={2}>Meio Ambiente</MenuItem>
                <MenuItem value={3}>Feminismo</MenuItem>
                <MenuItem value={4}>LGBTQIA+</MenuItem>
                <MenuItem value={5}>Pró-Escolha</MenuItem>
                <MenuItem value={6}>Pró-Vida</MenuItem>
                <MenuItem value={7}>...</MenuItem>
              </Select>
            </Grid>
            <Grid
              item
              xs={12}
              sm={1.7}
              md={1.7}
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              paddingBottom={2}
            >
              <Typography variant="subtitle2" sx={{ textAlign: "center" }}>
                PODER LEGISLATIVO
              </Typography>
              <Select
                defaultValue={1}
                sx={{ width: "100%" }}
                size="small"
                aria-label="Selecionar poder legislativo"
              >
                <MenuItem value={1}>Todos</MenuItem>
                <MenuItem value={2}>Câmara dos Deputados</MenuItem>
                <MenuItem value={3}>Senado Federal</MenuItem>
              </Select>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">Resultados da busca</Typography>
        </Grid>
        {candidatesList
          .filter((candidato) =>
            name.length > 0
              ? candidato.nome.toUpperCase().includes(name.toUpperCase())
              : true
          )
          .map((candidato) => (
            <Candidate key={candidato.numero} candidato={candidato} link />
          ))}
      </Grid>
    </Container>
  );
};

export default Candidates;
