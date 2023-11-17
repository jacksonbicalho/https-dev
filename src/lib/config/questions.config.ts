import path from 'path';
import { PromptObject } from 'prompts';
import { defaultConfig } from './default.config';

const config = defaultConfig.getDefaultConfig();

type DefaultQuestionsType = {
  msg?: string;
} & PromptObject;

export const Questions = async (): Promise<DefaultQuestionsType[]> => [
  {
    type: 'toggle',
    name: 'createConfig',
    initial: 'yes',
    inactive: 'no',
    active: 'yes',
    message:
    `By default we need to create a configuration file.\n
    Let's continue? [Y/n]`
  },
  {
    choices: [
      { title: 'Default', value: 'd' },
      { title: 'Custon', value: 'c' }
    ],
    initial: 0,
    message: 'You can use a default configuration or customize it?',
    name: 'custonOrDefault',
    type: 'select'
  },
  {
    type: prev => prev == 'd' ? 'confirm' : null,
    name: 'confirmDefault',
    initial: true,
    message: () => `Por favor confirma a criação de arquivo acima[n/Y]?`
  },
  {
    choices: [
      { title: 'java script', value: 'js' },
      { title: 'JSON', value: 'json' }
    ],
    initial: 0,
    message: 'Qual modelo de arquivo deseja criar ?',
    name: 'fileType',
    type: 'select'
  },
  {
    initial: (prev) => `https.config.${prev}`,
    message: 'qual o nomde do arquivo deseja usar ?',
    name: 'fileName',
    type: 'text'
  },
  {
    initial: 'localhost',
    message: 'qual o nomde do domínio deseja usar ?',
    name: 'publicDomain',
    type: 'text'
  },
  {
    name: 'keysPath',
    type: 'text',
    message: 'qual o caminho para armazenar as chaves ssl ?',
    initial: path.join(`${config.rootApp}`, 'ssl')
  },
  {
    initial: '8088',
    message: 'qual porta vamos usar',
    name: 'webPort',
    type: 'text'
  }
];

export const confirm: PromptObject = {
  initial: true,
  message: 'vamos criar o arquivo a configuração? [n/Y]',
  name: 'createConfig',
  type: 'confirm'
};