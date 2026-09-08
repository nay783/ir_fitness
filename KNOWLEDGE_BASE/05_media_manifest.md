# 05. Media Manifest & Local Asset Pipeline

## Brand Identity Assets
- **Primary Logo:** `MEDIA/logo/logo.jpg`
  - Web conversion target: `public/images/logo.png` & `public/images/logo.webp` (Hexagon crest with bold athletic typography).

## Local Video Allocations (`MEDIA/VIDEOS/`)

| UI Placement | Source File Name | Aspect Ratio | Badge / Context |
| :--- | :--- | :--- | :--- |
| **Hero Media Panel** | `ir.fitness.gym-comunidade-experiencia-treino-DcipHsvAepo.mp4` | 9:16 Portrait | "ALTA PERFORMANCE" |
| **Music & Gym Card** | `ir.fitness.gym-evento-music-gym-experience-vol2-Db7gdkQiGqZ.mp4` | 9:16 Portrait | "EVENTO VOL. 2" |
| **Karate Academy Card** | `irkarateacademy-promocao-karate-Dc5wCPsNzOs.mp4` | 9:16 Portrait | "KSI MAPUTO" |
| **Tatami Friendship** | `irkarateacademy-evento-tatami-friendship-1-Dbk_8f7twuK.mp4` | 9:16 Portrait | "TATAMI FRIENDSHIP" |
| **Nutrition Shop Feature** | `ir.fitness.shop-comemoracao-aniversario-12-anos-Dc1GKTjD63G.mp4` | 9:16 Portrait | "12 ANOS DE HISTÓRIA" |
| **Whey Protein Feature** | `ir.fitness.shop-promocao-whey-protein-baunilha-DbIdxnslKhl.mp4` | 9:16 Portrait | "IR NUTRITION" |
| **Student Lifestyle Rail** | `guift.gym-promocao-pacote-estudante-DalH4goIwU1.mp4` | 9:16 Portrait | "PACOTE ESTUDANTE" |
| **Athlete Technique Rail** | `nuno-mourinho1-treino-gluteos-Dbb2EnGN_E1.mp4` | 9:16 Portrait | "TREINO DE FORÇA" |
| **Mindset & Mental Rail** | `star-abencoado_cumbe-motivacao-mental-DbdzXdVq8k7.mp4` | 9:16 Portrait | "FOCO & DISCIPLINA" |

## Technical Compression Pipeline (FFmpeg)
Run the blueprint-specified compression on all raw clips before deployment[cite: 1]:
```bash
ffmpeg -y -i raw_input.mp4 -vf "scale=720:1280" -c:v libx264 -crf 26 -preset slow -pix_fmt yuv420p -movflags +faststart -an optimized.mp4
ffmpeg -y -ss 00:00:02 -i raw_input.mp4 -vframes 1 -vf "scale=720:1280" poster.webp