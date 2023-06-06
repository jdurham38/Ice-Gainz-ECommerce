import React from "react";
import userData from "@constants/data";

export default function Blog() {
  return (
    <section className="bg-[#F4F3EE] dark:bg-[#1F1F1F]">
      <div className="max-w-6xl mx-auto h-48 bg-[#F4F3EE] dark:bg-[#1F1F1F]">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left flex justify-center items-center">
          Blog
        </h1>
      </div>
      <div className="bg-[#F4F3EE] dark:bg-[#1F1F1F] -mt-4">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h2 className="text-3xl font-semibold mb-4">Example Blog Post Title</h2>
          <p className="text-lg text-gray-800 dark:text-[#FFFCF2] mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam ac metus tincidunt
            placerat sit amet at mi. Vestibulum at consectetur sem, sit amet feugiat massa. Donec
            interdum sapien non risus sagittis, id sagittis nunc lobortis. Nunc laoreet aliquam
            neque, at cursus massa. Integer pretium, urna ut consectetur luctus, arcu ex tempus
            velit, in sagittis urna ligula vitae neque. Ut vestibulum vehicula massa a rutrum. Sed
            convallis ac dui vel viverra. Sed consequat vehicula ante vel molestie. Ut auctor justo
            ut nunc iaculis, sit amet posuere mi sollicitudin. Vivamus a nunc eget lectus vehicula
            tincidunt. Nam vulputate justo id enim pharetra, at commodo massa rutrum. Nam ultrices
            felis a dui pharetra bibendum. Nam cursus mauris ut varius scelerisque. Proin euismod,
            mi et pulvinar consequat, lorem purus luctus felis, vel dictum mauris erat et arcu.
          </p>
          <p className="text-lg text-gray-800 dark:text-[#FFFCF2] mb-4">
            Nulla facilisi. Nunc volutpat commodo mauris, sit amet interdum lacus pharetra sed.
            Fusce nec convallis dui. Donec convallis aliquam tincidunt. Nam bibendum eros nec est
            vulputate sollicitudin. Nulla facilisi. Curabitur facilisis massa purus, eu lacinia
            justo fermentum eget. Sed et congue sem, in tincidunt mauris. Nam semper faucibus
            augue, at elementum nulla eleifend ut. Cras vulputate nisi in tincidunt bibendum. Sed
            viverra ex id tellus interdum, non tincidunt ante fermentum. Mauris vel risus sed nibh
            congue condimentum id vitae turpis. Sed facilisis orci nec justo fringilla commodo.
            Nulla volutpat, mauris non semper varius, nunc est eleifend tellus, vitae pretium elit
            ligula vel ligula.
          </p>
        </div>
      </div>
    </section>
  );
}
