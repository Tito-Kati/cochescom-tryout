import { Car } from '@/entities/Car';

export function Default () {
  return new Car(
    '42',
    'Skoda Octavia',
    'Ambition Plus, 1.5 TSI',
    12000,
    'gasoline',
    'Orihuela',
    2009,
    40000,
    true
  )
}
