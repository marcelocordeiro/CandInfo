import React from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Grid, Breadcrumbs, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Candidate from "../components/Candidate";
import candidatesList from "../data/candidatos.json";

const Profile = () => {
  const { id } = useParams();
  const theme = useTheme();

  const candidatos = candidatesList.filter(
    (candidato) => candidato.numero.toString() === id
  );
  document.title = "CandInfo - Candidato não encontrado";

  if (candidatos.length === 0) {
    return (
      <Container maxWidth="lg" sx={{ padding: { xs: 0, sm: 4 } }}>
        <Typography variant="subtitle2" sx={{ textAlign: "center" }}>
          Candidato não encontrado
        </Typography>
      </Container>
    );
  }

  document.title = `CandInfo - ${candidatos[0].nome}`;

  return (
    <Container maxWidth="lg" sx={{ padding: { xs: 0, sm: 4 } }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color={theme.palette.primary.dark} href="/">
              Página Inicial
            </Link>
            <Link
              underline="hover"
              color={theme.palette.primary.dark}
              href="/candidatos"
            >
              Candidatos
            </Link>
            <Typography color={theme.palette.primary.dark}>
              {candidatos[0].nome}
            </Typography>
          </Breadcrumbs>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">Informações do candidato</Typography>
        </Grid>
        <Candidate candidato={candidatos[0]} />
        <Grid item xs={12} sm={12} md={12} paddingBottom={2}>
          <Typography variant="subtitle2">INFORMAÇÕES PESSOAIS</Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              color: theme.palette.grey[200],
            }}
          >
            <div>
              <span style={{ fontWeight: 600 }}>Nome completo: </span>
              <span style={{ fontWeight: "normal" }}>
                {candidatos[0].nomeCompleto}
              </span>
            </div>
            <div>
              <span style={{ fontWeight: 600 }}>Idade: </span>
              <span style={{ fontWeight: "normal" }}>
                {candidatos[0].idade}
              </span>
            </div>
            <div>
              <span style={{ fontWeight: 600 }}>Formação: </span>
              <span style={{ fontWeight: "normal" }}>
                {candidatos[0].formacao}
              </span>
            </div>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} paddingBottom={2}>
          <Typography variant="subtitle2">
            HISTÓRIA DE CANDIDATURA E MANDATOS
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              color: theme.palette.grey[200],
            }}
          >
            <div style={{ fontWeight: "normal" }}>
              <p style={{ marginTop: 0 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                ornare lorem eu lectus rutrum, at tincidunt lectus ultricies.
                Nam fermentum, velit in molestie dictum, augue ligula bibendum
                ante, in pellentesque ipsum nisl laoreet ligula. Integer
                vulputate ex euismod mi gravida ullamcorper.
              </p>
              <p>
                Integer malesuada lobortis leo, vel aliquam felis iaculis at. In
                sit amet purus risus. Aenean tortor felis, tincidunt eu lobortis
                fringilla, interdum non enim. Curabitur nec hendrerit libero. Ut
                vitae nunc nec risus sodales mattis eget in justo. Morbi vel
                ligula in libero aliquam laoreet vel vitae est. Proin in leo
                dolor.
              </p>
            </div>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} paddingBottom={2}>
          <Typography variant="subtitle2">
            INFORMAÇÕES SOBRE O PARTIDO
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              color: theme.palette.grey[200],
            }}
          >
            <div style={{ fontWeight: "normal" }}>
              <p style={{ marginTop: 0 }}>
                Pellentesque a quam non mauris hendrerit tincidunt. Sed eu
                sollicitudin mauris, sed ultrices neque. Proin porta felis at
                tortor pulvinar facilisis. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Donec
                aliquam mollis orci, vitae tempor lacus dapibus quis. Cras
                lacinia lorem non libero feugiat mattis. Vivamus blandit posuere
                dui. Suspendisse tempus ultrices arcu.
              </p>
            </div>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
