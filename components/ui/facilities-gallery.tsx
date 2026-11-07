import { DraggableContainer, GridBody, GridItem } from '@/components/ui/infinite-drag-scroll';

const photos = [
  { id: 'fachada', label: 'Bienvenido a Valver', alt: 'Fachada de Valver Dental en Málaga, con la entrada acristalada y el rótulo de la clínica' },
  { id: 'sala-espera', label: 'Un momento de calma', alt: 'Sala de espera con sillas blancas, plantas y mesa de madera junto a la entrada' },
  { id: 'gabinete', label: 'Nuestro gabinete', alt: 'Gabinete odontológico con sillón azul, lámpara dental y equipo de trabajo' },
  { id: 'atencion', label: 'Cerca en cada paso', alt: 'Profesional de odontología atendiendo a un paciente en el gabinete de Valver' },
  { id: 'despacho', label: 'Espacio para escucharte', alt: 'Despacho con mesa de madera, dos sillas y estantería para conversar sobre el cuidado dental' },
  { id: 'pasillo', label: 'Cada detalle cuenta', alt: 'Pasillo luminoso de Valver con acceso al despacho y a las demás estancias' },
];

export default function FacilitiesGallery() {
  return <DraggableContainer variant="masonry">
    <GridBody>{photos.map((photo, index) => <GridItem key={photo.id} index={index}>
      <img src={`./assets/photos/instalaciones/${photo.id}-small.webp`} srcSet={`./assets/photos/instalaciones/${photo.id}-small.webp 480w, ./assets/photos/instalaciones/${photo.id}.webp 900w`} sizes="(max-width:760px) 160px, 240px" width="900" height="1200" alt={photo.alt} loading="eager" decoding="async" draggable={false} />
      <figcaption>{photo.label}</figcaption>
    </GridItem>)}</GridBody>
  </DraggableContainer>;
}
