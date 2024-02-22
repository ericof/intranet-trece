// Blocos
import ClimaEdit from './components/Blocks/Clima/Edit';
import ClimaView from './components/Blocks/Clima/View';

// Visoes
import AreaView from './components/View/AreaView';
import PessoaView from './components/View/PessoaView';

// Icones
import climaSVG from '@plone/volto/icons/cloud.svg';

const applyConfig = (config) => {
  config.settings = {
    ...config.settings,
    isMultilingual: false,
    supportedLanguages: ['pt-br'],
    defaultLanguage: 'pt-br',
  };
  // Blocos
  config.blocks.blocksConfig.climaBlock = {
    id: 'climaBlock',
    title: 'Clima',
    group: 'common',
    icon: climaSVG,
    view: ClimaView,
    edit: ClimaEdit,
    restricted: false,
    mostUsed: true,
    sidebarTab: true,
    blockHasOwnFocusManagement: false,
  };

  // Adiciona blocos ao Grid
  config.blocks.blocksConfig.gridBlock = {
    ...config.blocks.blocksConfig.gridBlock,
    blocksConfig: {
      ...config.blocks.blocksConfig,
    },
    allowedBlocks: [
      ...config.blocks.blocksConfig.gridBlock.allowedBlocks,
      'climaBlock',
    ],
  };

  // Visoes
  config.views.contentTypesViews = {
    ...config.views.contentTypesViews,
    Area: AreaView,
    Pessoa: PessoaView,
  };
  return config;
};

export default applyConfig;
