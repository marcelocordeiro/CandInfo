import React from "react";
import { Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

export interface ICandidate {
  foto: string;
  nome: string;
  nomeCompleto: string;
  idade: number;
  formacao: string;
  numero: number;
  estado: string;
  raca: string;
  partido: string;
  pautas: string[];
  orientacao: string;
  poder: string;
  genero: string;
}

export interface ICandidateProps {
  candidato: ICandidate;
  link?: boolean;
}

const Candidate = ({ candidato, link = false }: ICandidateProps) => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Grid
      item
      xs={12}
      sx={{
        backgroundColor: theme.palette.grey[100],
        cursor: link ? "pointer" : "default",
      }}
      marginTop={2}
      key={candidato.numero}
      onClick={() => {
        if (link) navigate(`/candidatos/${candidato.numero}`);
      }}
      role={link ? "link" : "textbox"}
      tabIndex={link ? 0 : -1}
      onKeyPress={(event) => {
        if (event.key === "Enter") {
          if (link) navigate(`/candidatos/${candidato.numero}`);
        }
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={2} md={2} paddingBottom={2}>
          <img
            src={require(`../assets/${candidato.foto}`)}
            alt={`Foto de ${candidato.nome}`}
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12} sm={10} md={10} paddingBottom={2}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12}>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "1.6rem",
                }}
              >
                <span style={{ color: theme.palette.grey[200] }}>
                  {candidato.nome.toUpperCase()}
                </span>
                <span
                  style={{
                    color: theme.palette.secondary.main,
                    paddingLeft: 20,
                  }}
                >
                  {candidato.numero}
                </span>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Typography
                sx={{
                  fontSize: "1rem",
                  color: theme.palette.grey[200],
                }}
              >
                <span style={{ fontWeight: 700 }}>Estado: </span>
                <span
                  style={{
                    fontWeight: "normal",
                  }}
                >
                  {candidato.estado}
                </span>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Typography
                sx={{
                  fontSize: "1rem",
                  color: theme.palette.grey[200],
                }}
              >
                <span style={{ fontWeight: 700 }}>Raça: </span>
                <span
                  style={{
                    fontWeight: "normal",
                  }}
                >
                  {candidato.raca}
                </span>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Typography
                sx={{
                  fontSize: "1rem",
                  color: theme.palette.grey[200],
                }}
              >
                <span style={{ fontWeight: 700 }}>Partido: </span>
                <span
                  style={{
                    fontWeight: "normal",
                  }}
                >
                  {candidato.partido}
                </span>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Typography
                sx={{
                  fontSize: "1rem",
                  color: theme.palette.grey[200],
                }}
              >
                <span style={{ fontWeight: 700 }}>Pautas: </span>
                <span
                  style={{
                    fontWeight: "normal",
                  }}
                >
                  {candidato.pautas
                    .map((pauta) => {
                      return pauta;
                    })
                    .join(", ")}
                </span>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Typography
                sx={{
                  fontSize: "1rem",
                  color: theme.palette.grey[200],
                }}
              >
                <span style={{ fontWeight: 700 }}>Orientação Sexual: </span>
                <span
                  style={{
                    fontWeight: "normal",
                  }}
                >
                  {candidato.orientacao}
                </span>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Typography
                sx={{
                  fontSize: "1rem",
                  color: theme.palette.grey[200],
                }}
              >
                <span style={{ fontWeight: 700 }}>Poder Legislativo: </span>
                <span
                  style={{
                    fontWeight: "normal",
                  }}
                >
                  {candidato.poder}
                </span>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Typography
                sx={{
                  fontSize: "1rem",
                  color: theme.palette.grey[200],
                }}
              >
                <span style={{ fontWeight: 700 }}>Gênero: </span>
                <span
                  style={{
                    fontWeight: "normal",
                  }}
                >
                  {candidato.genero}
                </span>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Candidate;
